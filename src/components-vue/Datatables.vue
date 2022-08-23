<template>
  <table></table>
</template>

<script>
import $ from 'jquery';
import 'datatables';

export default {
  name: 'Datatables',
  props: {
    columns: { type: Array, default: [] },
    data: { type: Array, default: null },
    options: { type: Object, default: {} },
    pageLength: { type: Number, default: 10 },
  },
  data: () => {
    return {
      datatable: null,
    };
  },
  async created () {
    $.fn.dataTableExt.oStdClasses.sInfo = 'dataTables_info fw-500 text-gray';
    $.fn.dataTableExt.oStdClasses.sPaging = 'pagination ';
    $.fn.dataTableExt.oStdClasses.sPageButton = 'page-item';
    $.fn.dataTableExt.oStdClasses.sPageButtonActive = 'active';
    $.fn.dataTableExt.oStdClasses.sPageButtonDisabled = 'disabled';
    $.fn.dataTableExt.pager.numbers_length = 5;
    $.fn.dataTable.defaults.oLanguage.sInfo =
      `_START_-_END_ of _TOTAL_<span class="hidden-sm-greater"> | Page _PAGE_ of _PAGES_</span>`;
    $.fn.dataTable.defaults.oLanguage.oPaginate.sPrevious =
      `
        <div class="flex flex-items-center hidden-sm">
          <i class="icon-chevron-left icon-16 margin-right-4"></i>
          Prev
        <div>
      `;
    $.fn.dataTable.defaults.oLanguage.oPaginate.sNext =
      `
        <div class="flex flex-items-center hidden-sm">
          Next
          <i class="icon-chevron-right icon-16 margin-left-4"></i>
        <div>
      `;
  },
  async mounted () {
    if (this.data != null) {
      this.render();
    }
    
    // todo: make sure what is this for
    this.$on("datatable.page.change", function (e) {
      if (this.datatable) {
        var pageInfo = this.datatable.page.info();

        console.log('datatable.page.change')
        if (e.page > 0 && pageInfo.page !== (e.page - 1)) {
          console.log('datatable.page.change redraw?')
          this.datatable.page(e.page - 1).draw("page");
        }
      }
    }.bind(this));
  },
  methods: {
    render (displayStart = 0) {
      // todo: create example of ajax
      if (typeof this.options.ajax === "object" && !this.options.ajax.data) {
        this.options.ajax.data = function (params) {
          return {
            page: params.start / params.length + 1,
            per: params.length,
          };
        };
      }

      if ($.fn.DataTable.isDataTable(this.$el)) {
        $(this.$el).DataTable().clear().destroy();
        $(this.$el).empty();
      }

      this.datatable = $(this.$el).DataTable({
        ajax: this.options.ajax ? this.options.ajax : null,
        autoWidth: false,
        columns: this.columns,
        createdRow: typeof this.options.createdRow === "function" ? this.options.createdRow : null,
        data: this.options.ajax ? null : this.data,
        deferRender: true,
        destroy: true,
        displayStart: displayStart,
        // <".control margin-bottom-20 flex flex-justify-between"i<".hidden-sm"p>>
        dom: `
          <".bg-white rounded-8 shadow-1 padding-24 margin-bottom-16"rt>
          <".control margin-bottom-20 flex flex-justify-between flex-justify-center-sm"<".hidden-sm"i>p>
          <".control hidden-sm-greater flex flex-justify-between"
            <".button button-primary fill margin-right-8">
            <".button button-primary fill margin-left-8">
          >
        `,
        preDrawCallback: function (settings) {
          var api = new $.fn.dataTable.Api(settings);
          $(this).closest('.dataTables_wrapper').find('.control').toggleClass('hidden', api.page.info().pages <= 1);
        },
        pageLength: this.pageLength,
        serverSide: !!this.options.ajax,
        ordering: true,
      });

      this.datatable.off("draw").on("draw", function (e) {
        this.$emit("draw", {
          datatable: this.datatable,
          drawEvent: e,
          pageInfo: this.datatable.page.info(),
        });

        if ($('.page-item.previous').hasClass('disabled')) {
          $('.button.margin-right-8').addClass('disabled')
        } else {
          $('.button.margin-right-8').removeClass('disabled')
        }

        if ($('.page-item.next').hasClass('disabled')) {
          $('.button.margin-left-8').addClass('disabled')
        } else {
          $('.button.margin-left-8').removeClass('disabled')
        }

        $('.vue-element', this.$el).each(function (i, ele) {
          this.$nextTick(() => {
            new Vue({ el: ele });
          });
        }.bind(this));
      }.bind(this));

      $('.button.margin-right-8').html('Prev').click(function (e) {
        this.datatable.page('previous').draw('page')
      }.bind(this));
      $('.button.margin-left-8').html('Next').click(function (e) {
        this.datatable.page('next').draw('page')
      }.bind(this));
    },
  },
  watch: {
    $props: {
      deep: true,
      immediate: true,
      handler () {
        if (this.data != null) {
          this.render();
        }
      },
    },
  },
}
</script>
