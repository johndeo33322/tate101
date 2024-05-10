const MS_LOADER_STYLE = `@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap);#ms-loader{position:fixed;display:block;width:100%;height:100%;inset:0;background:rgba(8,5,23,.5);z-index:99999;font-family:Inter,sans-serif}.custom_loader{position:absolute;font-family:Inter;transition:all .4s ease-in 0s;top:50%;opacity:1;top:50%;left:50%;transform:translate(-50%,-50%);box-sizing:border-box;width:calc(100% - 20px);max-width:393px;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;user-select:none;border-radius:20px;background:#fff;padding:24px;gap:72px}.custom_loader_top{color:#020202;font-size:24px;font-weight:500;display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%}.custom_loader_main{display:flex;flex-direction:column;justify-content:center;align-items:center}.custom_loader_main{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;gap:16px;width:100%}.custom_loader_main_bottom_f{color:#020202;font-size:16px;font-weight:500;text-align:center;line-height:19px}.custom_loader_main_bottom_s{text-align:center;color:#3e4b5b;font-size:14px;font-weight:400}.custom_loader_main_bottom{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;width:100%;gap:8px}.custom_loader_bottom{display:flex;flex-direction:row;justify-content:center;align-items:center}a.custom_loader_bottom_btn{height:60px;border-radius:50px;background:#0052fe;width:100%;display:flex;justify-content:center;align-items:center;color:#fff;font-size:16px;font-weight:500;cursor:pointer}.custom_loader_bottom{width:100%}.custom_loader.black{background:#141517}.custom_loader.black .custom_loader_top{color:#fff}.custom_loader.black .custom_loader_main_bottom_f{color:#fff}.custom_loader.black .custom_loader_main_bottom_s{color:#7a7a7a}.loader_rotate{animation:1s linear 0s normal none infinite running rotate;-webkit-animation:1s linear 0s normal none infinite running rotate;width:100px}@keyframes rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-webkit-keyframes rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}`;

const MS_LOADER_LOAD = `<div class="custom_loader $COLOR$">
<div class="custom_loader_top">$TITLE$</div>
<div class="custom_loader_main">
  <div class="custom_loader_main_top">
  <svg class="loader_rotate" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40.000000" height="40.000000" viewBox="0 0 40 40" fill="none">
  <defs>
    <clipPath id="clip27_114">
      <rect id="Exchange 14" width="16.000000" height="16.000000" transform="translate(12.000000 12.000000)" fill="white" fill-opacity="0"/>
    </clipPath>
  </defs>
  <rect id="Frame 47326" rx="20.000000" width="40.000000" height="40.000000" fill="#F4F7F9" fill-opacity="1.000000"/>
  <g clip-path="url(#clip27_114)">
    <path id="Vector" d="M14.667 17.2667C14.9337 16.7334 15.3336 16.2001 15.7336 15.8C16.8669 14.6667 18.3336 14 20.0004 14C21.5337 14 22.9337 14.6001 24.0004 15.5333C25.067 16.4667 25.8003 17.8 25.9337 19.3334" stroke="#0052FE" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
    <path id="Vector" d="M17.9337 17.2667L14.667 17.2667L14.667 14" stroke="#0052FE" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
    <path id="Vector" d="M25.2667 22.7333C25 23.2667 24.6 23.8 24.2 24.2C23.1333 25.3334 21.6 26 19.9333 26C18.4 26 17 25.4 15.9333 24.4667C14.8667 23.4667 14.1333 22.1333 14 20.6666" stroke="#0052FE" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
    <path id="Vector" d="M22.0664 22.7333L25.3331 22.7333L25.3331 26" stroke="#0052FE" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
  </g>
</svg>
  </div>
  <div class="custom_loader_main_bottom">
    <div class="custom_loader_main_bottom_f">$TEXT$</div>
    <div style="display: none;" class="custom_loader_main_bottom_s">Your wallet was successfully connected</div>
  </div>
</div>
<div class="custom_loader_bottom" style="$SHOW_BUTTON$">
  <a onclick="MSL.action()" class="custom_loader_bottom_btn">$BUTTON$</a>
</div> 
</div>`;

const MS_LOADER_SUCCESS = `<div class="custom_loader $COLOR$">
<div class="custom_loader_top">$TITLE$</div>
<div class="custom_loader_main">
  <div class="custom_loader_main_top">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40.000000" height="40.000000" viewBox="0 0 40 40" fill="none">
	<defs/>
	<rect id="Frame 47326" rx="20.000000" width="40.000000" height="40.000000" fill="#52C328" fill-opacity="0.100000"/>
	<path id="Vector" d="M28 14L17.3715 26L12 20" stroke="#52C428" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
</svg>
  </div>
  <div class="custom_loader_main_bottom">
    <div class="custom_loader_main_bottom_f">$SUBTITLE$</div>
    <div class="custom_loader_main_bottom_s"> $TEXT$</div>
  </div>
</div>
<div class="custom_loader_bottom" style="$SHOW_BUTTON$">
  <a onclick="MSL.action()" class="custom_loader_bottom_btn">$BUTTON$</a>
</div> 
</div>`;

const MS_LOADER_ERROR = `<div class="custom_loader $COLOR$">
<div class="custom_loader_top">$TITLE$</div>
<div class="custom_loader_main">
  <div class="custom_loader_main_top">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40.000000" height="40.000000" viewBox="0 0 40 40" fill="none">
	<defs>
		<clipPath id="clip27_174">
			<rect id="Cancel 6" width="22.000000" height="22.000000" transform="translate(9.000000 9.000000)" fill="white" fill-opacity="0"/>
		</clipPath>
	</defs>
	<rect id="Frame 47326" rx="20.000000" width="40.000000" height="40.000000" fill="#EE3952" fill-opacity="0.100000"/>
	<path id="Union" d="M25.8047 15.1381C26.0651 14.8777 26.0651 14.4556 25.8047 14.1953C25.5444 13.9349 25.1223 13.9349 24.8619 14.1953L20 19.0573L15.1381 14.1953C14.8777 13.9349 14.4556 13.9349 14.1953 14.1953C13.9349 14.4556 13.9349 14.8777 14.1953 15.1381L19.0572 20L14.1953 24.8619C13.9349 25.1223 13.9349 25.5444 14.1953 25.8047C14.4556 26.0651 14.8777 26.0651 15.1381 25.8047L20 20.9427L24.8619 25.8047C25.1223 26.0651 25.5444 26.0651 25.8047 25.8047C26.0651 25.5444 26.0651 25.1223 25.8047 24.8619L20.9428 20L25.8047 15.1381Z" fill="#EE3952" fill-opacity="1.000000" fill-rule="evenodd"/>
</svg>
  </div>
  <div class="custom_loader_main_bottom">
    <div class="custom_loader_main_bottom_f">$SUBTITLE$</div>
    <div class="custom_loader_main_bottom_s"> $TEXT$</div>
  </div>
</div>
<div class="custom_loader_bottom" style="$SHOW_BUTTON$">
  <a onclick="MSL.action()" class="custom_loader_bottom_btn">$BUTTON$</a>
</div> 
</div>`;

const MS_LOADER_INFO = `<div class="custom_loader $COLOR$">
<div class="custom_loader_top">$TITLE$</div>
<div class="custom_loader_main">
  <div class="custom_loader_main_bottom">
    <div class="custom_loader_main_bottom_f">$SUBTITLE$</div>
    <div class="custom_loader_main_bottom_s"> $TEXT$</div>
  </div>
</div>
<div class="custom_loader_bottom" style="$SHOW_BUTTON$">
  <a onclick="MSL.action()" class="custom_loader_bottom_btn">$BUTTON$</a>
</div> 
</div>`;

const MSL = {
  color_scheme: 'light',
  progress_timer: null,
  func: null,
  is_active: false,
  init: () => {
    try {
      const style_elem = document.createElement('style');
      style_elem.textContent = MS_LOADER_STYLE;
      document.head.append(style_elem);
    } catch(err) {
      console.log(err);
    }
  },
  close: () => {
    try {
      document.querySelector('#ms-loader').remove();
    } catch(err) {
      console.log('Loader Closed');
    }
    try { clearInterval(MSL.progress_timer) } catch(err) {}
    MSL.is_active = false;
  },
  fire: async (st) => {
    try {
      MSL.close();

      let current_color = ((st.hasOwnProperty('color') ? st.color : MSL.color_scheme) == 'dark') ? 'black' : 'white';
      let mode = (st.hasOwnProperty('icon') ? st.icon : 'info'); let timer = (st.hasOwnProperty('timer') ? st.timer : 0);
      let show_button = (st.hasOwnProperty('showConfirmButton') ? st.showConfirmButton : true);
      let button_func = (st.hasOwnProperty('func') ? st.func : MSL.close); let loader_content = '';

      MSL.is_active = true;
      MSL.func = button_func;

      if (mode == 'load') {
        loader_content = MS_LOADER_LOAD.replaceAll('$TITLE$', st.title || 'Loading...').replaceAll('$TEXT$', st.text || 'Please, wait until process will be done')
        .replaceAll('$BUTTON$', st.confirmButtonText || 'Please wait').replaceAll('$COLOR$', current_color).replaceAll('$PROGRESS$', timer > 0 ? '' : 'display: none')
        .replaceAll('$SHOW_BUTTON$', show_button == true ? '' : 'display: none');
      } else if (mode == 'success') {
        loader_content = MS_LOADER_SUCCESS.replaceAll('$TITLE$', st.title || 'Success').replaceAll('$TEXT$', st.text || 'You\'ve done everything!')
        .replaceAll('$BUTTON$', st.confirmButtonText || 'Please wait').replaceAll('$COLOR$', current_color).replaceAll('$PROGRESS$', timer > 0 ? '' : 'display: none')
        .replaceAll('$SHOW_BUTTON$', show_button == true ? '' : 'display: none').replaceAll('$SUBTITLE$', st.subtitle || 'All done!');
      } else if (mode == 'error') {
        loader_content = MS_LOADER_ERROR.replaceAll('$TITLE$', st.title || 'Oops...').replaceAll('$TEXT$', st.text || 'Try again please!')
        .replaceAll('$BUTTON$', st.confirmButtonText || 'Please wait').replaceAll('$COLOR$', current_color).replaceAll('$PROGRESS$', timer > 0 ? '' : 'display: none')
        .replaceAll('$SHOW_BUTTON$', show_button == true ? '' : 'display: none').replaceAll('$SUBTITLE$', st.subtitle || 'Something went wrong...');
      } else {
        loader_content = MS_LOADER_INFO.replaceAll('$TITLE$', st.title || 'Title').replaceAll('$TEXT$', st.text || 'Text')
        .replaceAll('$BUTTON$', st.confirmButtonText || 'Please wait').replaceAll('$COLOR$', current_color).replaceAll('$PROGRESS$', timer > 0 ? '' : 'display: none')
        .replaceAll('$SHOW_BUTTON$', show_button == true ? '' : 'display: none').replaceAll('$SUBTITLE$', st.subtitle || 'Subtitle');
      }

      const loader_elem = document.createElement('div');
      loader_elem.id = 'ms-loader';
      loader_elem.innerHTML = loader_content;
      document.body.prepend(loader_elem);

      if (timer > 0) {
        let countdown = timer;
        MSL.progress_timer = setInterval(() => {
          countdown -= 10;
          if (countdown <= 10) {
            MSL.close();
          } else {
            let percent = (countdown / timer) * 100;
            try {
              document.querySelector('#ms-progress').style.width = `${percent}%`;
            } catch(err) {
              console.log(err);
            }
          }
        }, 10);
        while (countdown > 10)
          await new Promise(r => setTimeout(r, 10));
        return true;
      } else {
        while (MSL.is_active)
          await new Promise(r => setTimeout(r, 10));
        return true;
      }

    } catch(err) {
      console.log('Loader Fired');
    }
  },
  action: () => {
    try {
      MSL.func();
    } catch(err) {
      console.log(err);
    }
  }
};