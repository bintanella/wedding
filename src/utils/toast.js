import toastr from 'toastr'

let toast = (function (toastr) {
  let getContent = function (title, description) {
    return `<div class="bg-white rounded-4 shadow-2 padding-x-24 padding-y-12">
        ${(title ? '<div class="fw-bold">' + title + '</div>' : '')}
        ${(description ? '<div class="text-grayer">' + description + '</div>' : '')}
    </div>`;
  };

  let options = {
    containerId: 'toast-container',
    toastClass: 'toast',
    tapToDismiss: false,
    debug: false,
    showMethod: 'fadeIn', //fadeIn, slideDown, and show are built into jQuery
    showDuration: 300,
    showEasing: 'swing', //swing and linear are built into jQuery
    onShown: undefined,
    hideMethod: 'fadeOut',
    hideDuration: 300,
    hideEasing: 'swing',
    onHidden: undefined,
    closeMethod: false,
    closeDuration: false,
    closeEasing: false,
    closeOnHover: true,
    extendedTimeOut: 100,
    iconClasses: {
      info: '_',
    },
    positionClass: 'toast-top-center',
    timeOut: 2000, // Set timeOut and extendedTimeOut to 0 to make it sticky
    titleClass: null,
    messageClass: null,
    escapeHtml: false,
    target: 'body',
    newestOnTop: true,
    preventDuplicates: false,
    progressBar: false,
    rtl: false,
  };

  return {
    show: function (title, description) {
      toastr.options = options;
      toastr.info(getContent(title, description));
    },
  };
})(toastr);

export default toast;
