import toastr from 'toastr'

let toast = (function (toastr) {
  let getContent = function (title, description, type) {
    return `<div class="bg-white rounded-4 shadow-2 padding-x-24 padding-y-24 text-center">
        <div>
          ${(
            type === "success" ?
              '<img class="" style="width: 28px;" src="https://ellabintan.com/favicon.ico">' :
              '<img class="" style="width: 28px;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb3KJX4WVkvKFB0C0JSJUg_IjYl4yLEnVscg&usqp=CAU">'
          )}
        </div>
        ${(title ? '<div class="h3 margin-top-4">' + title + '</div>' : '')}
        ${(description ? '<div class="text-dark margin-top-12">' + description + '</div>' : '')}
    </div>`;
  };

  let options = {
    containerId: 'toast-container',
    toastClass: 'toast text-wrap',
    tapToDismiss: true,
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
    extendedTimeOut: 4000,
    iconClasses: {
      info: '_',
    },
    positionClass: 'toast-top-center',
    timeOut: 4000, // Set timeOut and extendedTimeOut to 0 to make it sticky
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
    success: function (title, description) {
      toastr.options = options;
      toastr.info(getContent(title, description, "success"));
    },
    error: function (title, description) {
      toastr.options = options;
      toastr.info(getContent(title, description, "error"));
    },
  };
})(toastr);

export default toast;
