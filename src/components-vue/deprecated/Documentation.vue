<template>
  <div>
    <!-- <h1>Title: {{ msg }}</h1> -->
    v-bind:, @ for v-on: and # for v-slot

    <div v-for="(kelas, index) in classess">
      {{ kelas }}
    </div>

    <!-- typography -->
    <h1 class="h1">What is CSS</h1>
    <p>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript</p>
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Coca cola
        <ol>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Coca Cola</li>
        </ol>
        <ol class="list-unstyled">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Coca Cola</li>
        </ol>
        <ol class="list-inline">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Coca Cola</li>
        </ol>
      </li>
    </ul>
    <div class="h2 text-center text-middle text-uppercase text-ellipsis text-strike text-underline-primary fs-italic fw-700 cursor-pointer margin-top-24">
      Cascading Style Sheets
    </div>

    <!-- table -->
    <table class="table table-striped table-bordered table-hovered table-compact margin-top-40">
      <thead>
        <tr>
          <th class="th-expand">Company</th>
          <th class="th-shrink">Permissions</th>
          <th class="th-expand">Position</th>
          <th class="th-shrink">Responsibilities</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> dummy dummy dummy dummy  </td>
          <td> dummy </td>
          <td> dummy </td>
          <td> dummy </td>
        </tr>
        <tr>
          <td> dummy </td>
          <td> dummy </td>
          <td> dummy </td>
          <td> dummy </td>
        </tr>
        <tr>
          <td> dummy </td>
          <td> dummy </td>
          <td> dummy </td>
          <td> dummy </td>
        </tr>
        <tr>
          <td> dummy </td>
          <td> dummy </td>
          <td> dummy </td>
          <td> dummy </td>
        </tr>
      </tbody>
    </table>

    <!-- flex & others -->
    <div class="flex flex-wrap flex-justify-between text-black margin-top-40">
      <div class="width-96px skeleton padding-12 shadow-3"></div>
      <div class="width-96px bg-primary skeleton padding-12 shadow-3"></div>
      <div class="width-96px border border-primary hover-border-darkest padding-12 shadow-3">a</div>
      <div class="width-96px bg-lighter padding-12 shadow-3">a</div>
    </div>

    <!-- background img -->
    <div class="width-96px height-96px has-bg-img flex flex-items-center flex-justify-center rounded-4 margin-top-40">
      <div class="bg-img bg-img-no-repeat"
        style="background-image: url('https://img.freepik.com/free-vector/gradient-mountain-landscape_52683-77407.jpg');">
      </div>
      content
    </div>

    <!-- form -->
    <form class="margin-top-40 width-30">
      <div class="margin-bottom-24">
        <label class="form-label">Text</label>
        <input class="form-text" disabled
          id="text"
          name="text"
          placeholder="Text"
          type="text">
      </div>

      <div class="form-group margin-bottom-12">
        <div class="form-prepend button-dark">
          @
        </div>
        <div class="form-prepend button-darker">
          @
        </div>
        <input class="form-text" name="text" placeholder="Text" type="text" disabled>
        <div class="form-append form-blend">
          @
        </div>
        <div class="form-append button-darkest">
          @
        </div>
        <div class="form-append button-primary">
          @
        </div>
      </div>

      <div class="margin-bottom-24">
        <label for="textarea" class="form-label">Textarea</label>
        <textarea class="form-textarea"
          id="textarea"
          name="textarea"
          placeholder="Textarea">
        </textarea>
      </div>

      <div class="margin-bottom-24">
        <label for="textarea-group-sm" class="form-label">Textarea (Form Group)</label>
        <div class="form-group">
          <div class="form-prepend button-primary form-xs">
            SBL
          </div>
          <textarea class="form-textarea form-xs" id="textarea-group-sm" name="textarea" placeholder="Textarea"></textarea>
          <div class="form-append button-dark form-xs">
            @
          </div>
        </div>
      </div>

      <div class="margin-bottom-24">
        <label for="dropdown" class="form-label">Dropdown</label>
        <select class="form-dropdown"
            id="dropdown"
            name="dropdown">
          <option disabled selected value="">please select</option>
          <optgroup label="Group 1" value="Group 1">
            <option value="Alpha">Alpha</option>
            <option value="Bravo">Bravo</option>
          </optgroup>
          <optgroup label="Group 2" value="Group 2">
            <option value="Charlie">Charlie</option>
            <option value="Delta">Delta</option>
          </optgroup>
        </select>
      </div>
      
      <div class="margin-bottom-24">
        <label for="dropdown-group-sm" class="form-label">Dropdown (Form Group)</label>
        <div class="form-group">
          <div class="form-prepend button-primary form-xs">
            SBL
          </div>
          <select class="form-dropdown form-xs" id="dropdown-group-sm" name="dropdown">
            <optgroup label="Group 1" value="Group 1">
              <option value="Alpha">Alpha</option>
              <option value="Echo">Echo</option>
            </optgroup>
            <optgroup label="Group 2" value="Group 1">
              <option value="Bravo">Bravo</option>
              <option value="Charlie">Charlie</option>
            </optgroup>
          </select>
          <div class="form-append button-dark form-xs">
            @
          </div>
        </div>
      </div>

      <div class="margin-bottom-24">
        <label for="dropdown-multiple" class="form-label">Dropdown Multiple</label>
        <select class="form-dropdown"
            id="dropdown-multiple"
            name="dropdown-multiple"
            size="4"
            multiple>
          <optgroup label="Group 1" value="Group 1">
            <option value="Alpha">Alpha</option>
            <option value="Bravo">Bravo</option>
          </optgroup>
          <optgroup label="Group 2" value="Group 2">
            <option value="Charlie">Charlie</option>
            <option value="Delta">Delta</option>
          </optgroup>
        </select>
      </div>

      <div class="margin-bottom-24">
        <label class="form-label">Checkbox</label>
        <div class="form-checkbox">
          <label>
            <input name="checkbox" value="1" type="checkbox" disabled checked>
            option 1
          </label>
          <label>
            <input name="checkbox" value="2" type="checkbox">
            option 2
          </label>
          <label>
            <input name="checkbox" value="3" type="checkbox" disabled>
            option 3
          </label>
        </div>
      </div>

      <div class="margin-bottom-24">
        <label class="form-label">Checkbox Inline</label>
        <div class="form-checkbox form-checkbox-inline">
          <label>
            <input name="checkbox-inline" value="1" type="checkbox" disabled checked>
            option 1
          </label>
          <label>
            <input name="checkbox-inline" value="2" type="checkbox">
            option 2
          </label>
          <label>
            <input name="checkbox-inline" value="3" type="checkbox" disabled>
            option 3
          </label>
        </div>
      </div>

      <div class="margin-bottom-24">
        <label class="form-label">Checkbox Stroke</label>
        <div class="form-checkbox form-checkbox-stroke">
          <label>
            <input name="checkbox-stroke" value="1" type="checkbox" disabled checked><i></i>
            option 1
          </label>
          <label>
            <input name="checkbox-stroke" value="2" type="checkbox"><i></i>
            option 2
          </label>
          <label>
            <input name="checkbox-stroke" value="3" type="checkbox" disabled><i></i>
            option 3
          </label>
        </div>
      </div>

      <div class="margin-bottom-24">
        <label class="form-label">Checkbox Fill</label>
        <div class="form-checkbox form-checkbox-fill">
          <label>
            <input name="checkbox-fill" value="1" type="checkbox" disabled checked><i></i>
            option 1
          </label>
          <label>
            <input name="checkbox-fill" value="2" type="checkbox"><i></i>
            option 2
          </label>
          <label>
            <input name="checkbox-fill" value="3" type="checkbox" disabled><i></i>
            option 3
          </label>
        </div>
      </div>

      <div class="margin-bottom-24">
        <label class="form-label">Radio</label>
        <div class="form-radio">
          <label>
            <input name="radio" value="1" type="radio" disabled checked>
            option 1
          </label>
          <label>
            <input name="radio" value="2" type="radio">
            option 2
          </label>
          <label>
            <input name="radio" value="3" type="radio" disabled>
            option 3
          </label>
        </div>
      </div>

      <div class="margin-bottom-24">
        <label class="form-label">Radio Inline</label>
        <div class="form-radio form-radio-inline">
          <label>
            <input name="radio-inline" value="1" type="radio" disabled checked>
            option 1
          </label>
          <label>
            <input name="radio-inline" value="2" type="radio">
            option 2
          </label>
          <label>
            <input name="radio-inline" value="3" type="radio" disabled>
            option 3
          </label>
        </div>
      </div>

      <div class="margin-bottom-24">
        <label class="form-label">Radio Stroke</label>
        <div class="form-radio form-radio-stroke">
          <label>
            <input name="radio-stroke" value="1" type="radio" disabled checked><i></i>
            option 1
          </label>
          <label>
            <input name="radio-stroke" value="2" type="radio"><i></i>
            option 2
          </label>
          <label>
            <input name="radio-stroke" value="3" type="radio" disabled><i></i>
            option 3
          </label>
        </div>
      </div>

      <div class="margin-bottom-24">
        <label class="form-label">Radio Fill</label>
        <div class="form-radio form-radio-fill">
          <label>
            <input name="radio-fill" value="1" type="radio" disabled checked><i></i>
            option 1
          </label>
          <label>
            <input name="radio-fill" value="2" type="radio"><i></i>
            option 2
          </label>
          <label>
            <input name="radio-fill" value="3" type="radio" disabled><i></i>
            option 3
          </label>
        </div>
      </div>

      <div class="margin-bottom-24">
        <label for="file" class="form-label">File</label>
        <input class="form-file" id="file" name="file" type="file">
      </div>
    </form>

    <!-- button -->
    <div class="flex margin-top-40">
      <div class="width-50">
        <div class="bg-white padding-20 rounded border">
          <div class="margin-4 button">button</div>
          <br>
          <div class="margin-4 button button-black">button-black</div>
          <div class="margin-4 button button-stroke-black">button-stroke-black</div>
          <br>
          <div class="margin-4 button button-white">button-white</div>
          <div class="margin-4 button button-stroke-white">button-stroke-white</div>
          <br>
          <div class="margin-4 button button-primary">button-primary</div>
          <div class="margin-4 button button-stroke-primary">button-stroke-primary</div>
          <br>
          <div class="margin-4 button button-light">button-light</div>
          <div class="margin-4 button button-stroke-light">button-stroke-light</div>
          <br>
          <div class="margin-4 button button-gray">button-gray</div>
          <div class="margin-4 button button-stroke-gray">button-stroke-gray</div>
          <br>
          <div class="margin-4 button button-dark">button-dark</div>
          <div class="margin-4 button button-stroke-dark">button-stroke-dark</div>
          <br>
        </div>
      </div>
      <div class="width-50">
        <div class="bg-darkest padding-20 rounded">
          <div class="margin-4 button">button</div>
          <br>
          <div class="margin-4 button button-black">button-black</div>
          <div class="margin-4 button button-stroke-black">button-stroke-black</div>
          <br>
          <div class="margin-4 button button-white hover-button-stroke-white">button-white</div>
          <div class="margin-4 button button-stroke-white hover-button-white">button-stroke-white</div>
          <br>
          <div class="margin-4 button button-primary">button-primary</div>
          <div class="margin-4 button button-stroke-primary">button-stroke-primary</div>
          <br>
          <div class="margin-4 button button-light">button-light</div>
          <div class="margin-4 button button-stroke-light">button-stroke-light</div>
          <br>
          <div class="margin-4 button button-gray">button-gray</div>
          <div class="margin-4 button button-stroke-gray">button-stroke-gray</div>
          <br>
          <div class="margin-4 button button-dark">button-dark</div>
          <div class="margin-4 button button-stroke-dark">button-stroke-dark</div>
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../utils/api'

export default {
  name: 'Documentation',
  props: {
    msg: String
  },
  data () {
    return {
      error: null,
      loading: false,
      classess: [
        'html.scroll-none[-breakpoint]',
        '.button',
        '.button.button-(color)[-(breakpoint)]',
        '.button.button-stroke-(color)[-(breakpoint)]',
        '.button.hover-button-(color)[-(breakpoint)]',
        '.button.hover-button-stroke-(color)[-(breakpoint)]',
      ],
    }
  },
  async mounted () {
    this.haha()
  },
  methods: {
    haha () {
      this.loading = true;

      const handleError = (error) => {
        this.error = error;
        this.loading = false;
      }

      api.retry({ beforeRetry: handleError })
        .get("users")
        .then(function (response) {
          console.log(response)
          this.error = null;
          this.loading = false;
          return;
        }.bind(this))
        .catch(this.handleError);
    }
  }
}
</script>
