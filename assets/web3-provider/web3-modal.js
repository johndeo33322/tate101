const MS_MODAL_STYLE = `@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap);#ms-modal{position:fixed;display:block;width:100%;height:100%;inset:0;background:rgba(8,5,23,.5);z-index:99999;font-family:Inter,sans-serif}.custom_modal{gap: 32px;user-select: none;position:absolute;font-family:Inter;transition:all .4s ease-in 0s;top:50%;opacity:1;top:50%;left:50%;transform:translate(-50%,-50%);box-sizing:border-box;width:calc(100% - 20px);max-width:393px;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;padding:24px;border-radius:20px;background:#fff;user-select:none}.custom_modal_top{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;width:100%;gap:20px}.custom_modal_top_f{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;gap:8px}.custom_modal_top_f_a{color:#020202;font-size:24px;font-weight:400}.custom_modal_top_f_b{color:#3e4b5b;font-size:16px;font-weight:400}.custom_modal_top_s{border-radius:80px;background:#f4f7f9;width:100%;display:flex;flex-direction:row;justify-content:center;align-items:center;padding:4px;height:48px}span.custom_modal_top_s_f{border-radius:112px;box-shadow:0 4px 4px 0 rgba(0,0,0,.06);background:#fff}.custom_modal_top_s span{width:50%;display:flex;flex-direction:row;justify-content:center;align-items:center;height:100%;color:#020202;font-size:16px;gap:8px;cursor:pointer;font-weight:500}span.custom_modal_top_s_s{color:#3e4b5b;font-size:16px;font-weight:400}.custom_modal_main{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;width:100%;gap:8px}.custom_modal_el{box-sizing:border-box;border:1px solid #d4dfe4;border-radius:100px;box-shadow:0 2px 4px 0 rgba(0,0,0,.08);display:flex;flex-direction:row;align-items:center;height:60px;width:100%;padding:20px;gap:8px;cursor:pointer;position:relative}.custom_modal_el_name{color:#020202;font-size:16px;font-weight:500;line-height:19px}.custom_modal_active{width:16px;height:16px;background:rgba(0,82,254,.15);border-radius:50px;position:absolute;right:20px;display:flex;justify-content:center;align-items:center;display:none}.custom_modal_active_inside{width:10px;height:10px;box-sizing:border-box;border:1px solid #fff;background:#0052fe;border-radius:50px}.custom_modal_el.active .custom_modal_active{display:flex}.custom_modal_bottom_buttons{display:flex;flex-direction:column;align-items:center;width:100%;gap:8px;font-size:14px;font-weight:400;line-height:140%;text-align:center}.custom_modal_bottom{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;gap:20px;width:100%}.custom_modal_bottom_buttons a{height:60px;border-radius:50px;width:100%;cursor:pointer}a.bottom_buttons_f{background:#0052fe;color:#fff;font-size:16px;font-weight:500;line-height:19px;display:flex;justify-content:center;align-items:center}a.bottom_buttons_s{border:1px solid #d4dfe4}a.bottom_buttons_s{color:#020202;font-family:Inter;font-size:16px;font-weight:500;display:flex;justify-content:center;align-items:center}.custom_modal_bottom_txt{text-align:center}.custom_modal_bottom_txt b{font-weight:500}.custom_modal_el.active{outline:1px solid #0052fe}.custom_modal.black{background:#141517}.custom_modal.black .custom_modal_top_f_a{color:#fff}.custom_modal.black .custom_modal_top_f_b{color:#7a7a7a}.custom_modal.black .custom_modal_top_s{background:#1e1f21}.custom_modal.black span.custom_modal_top_s_f{background:#2a2c2f}.custom_modal.black span.custom_modal_top_s_f{color:rgb(255 255 255)}.custom_modal.black span.custom_modal_top_s_f svg{fill:rgb(255 255 255 / 0%);color:rgb(255 255 255)}.custom_modal.black .custom_modal_top_s_f g path{stroke:#fff}.custom_modal.black span.custom_modal_top_s_s{color:#7a7a7a}.custom_modal.black .custom_modal_top_s_s g path{stroke:#7a7a7a}.custom_modal.black .custom_modal_el{border:1px solid #2a2c2f}.custom_modal.black .custom_modal_el_name{color:#fff}.custom_modal.black .custom_modal_active_inside{border:1px solid #141517}.custom_modal_bottom_txt{font-size:15px;font-weight:400;box-sizing:border-box}.custom_modal.black a.bottom_buttons_s{color:#fff;border:1px solid #2a2c2f}.custom_modal.black .custom_modal_bottom_txt{color:#7a7a7a}.custom_modal.black .custom_modal_bottom_txt b{color:#fff}@media (max-width:425px){.custom_modal_bottom_txt{display:none}.custom_modal_bottom_buttons a{height:50px}.custom_modal_top_f_b{display:none}}`;

const MS_MODAL_CODE = `<div class="custom_modal $COLOR$">
<div class="custom_modal_top">
  <div class="custom_modal_top_f">
    <div class="custom_modal_top_f_a">Connect wallet</div>
    <div class="custom_modal_top_f_b">Choose a wallet to connect</div>
  </div>
  <div class="custom_modal_top_s">
    <span class="custom_modal_top_s_f"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16.000000" height="16.000000" viewBox="0 0 16 16" fill="none">
              <defs>
                  <clipPath id="clip27_207">
                      <rect id="wallet-09" width="16.000000" height="16.000000" fill="white" fill-opacity="0"/>
                  </clipPath>
              </defs>
              <g clip-path="url(#clip27_207)">
                  <path id="Vector" d="M4 4.66675C2.86667 4.66675 2 5.53345 2 6.66675L2 12.0001C2 13.1334 2.86667 14.0001 4 14.0001L12 14.0001C13.1333 14.0001 14 13.1334 14 12.0001L14 6.66675C14 5.53345 13.1333 4.66675 12 4.66675L4 4.66675Z" stroke="#020202" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round"/>
                  <path id="Vector" d="M5.06665 4.66663L7.33331 2.40002C7.86664 1.8667 8.73331 1.8667 9.19998 2.40002L11.4666 4.66663" stroke="#020202" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
                  <path id="Vector" d="M11.3333 10.6666C10.6 10.6666 10 10.0667 10 9.33337C10 8.59998 10.6 8 11.3333 8L14 8L14 10.6666L11.3333 10.6666Z" stroke="#020202" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round"/>
              </g>
          </svg>Choose wallet</span>
    <span onclick="use_wc()" class="custom_modal_top_s_s"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16.000000" height="16.000000" viewBox="0 0 16 16" fill="none">

              <defs>
                  <clipPath id="clip27_210">
                      <rect id="qr" width="16.000000" height="16.000000" fill="white" fill-opacity="0"/>
                  </clipPath>
              </defs>
              <g clip-path="url(#clip27_210)">
                  <path id="Vector" d="M10.5333 2L11.3333 2C12.8 2 14 3.19995 14 4.66663L14 5.40002" stroke="#3E4B5B" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
                  <path id="Vector" d="M2 5.53333L2 4.66663C2 3.19995 3.20001 2 4.66666 2L5.39999 2" stroke="#3E4B5B" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
                  <path id="Vector" d="M5.53333 14.0001L4.66666 14.0001C3.20001 14.0001 2 12.8 2 11.3334L2 10.6001" stroke="#3E4B5B" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
                  <path id="Vector" d="M14 10.5334L14 11.3335C14 12.8002 12.8 14.0001 11.3333 14.0001L10.6 14.0001" stroke="#3E4B5B" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
                  <path id="Vector" d="M11.3333 9.33337L4.66663 9.33337" stroke="#3E4B5B" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
              </g>
          </svg>Scan With QR</span>
  </div>
</div>
<div class="custom_modal_main">
  <div id="ms_wallet_mm" onclick="MSM.select('#ms_wallet_mm')" class="custom_modal_el active">
    <div class="custom_modal_el_img">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none">
        <defs>
          <clipPath id="clip27_216">
            <rect id="Metamask" width="20.000000" height="20.000000" fill="white" fill-opacity="0" />
          </clipPath>
        </defs>
        <g clip-path="url(#clip27_216)">
          <path id="Vector" d="M19.004 0.78125L11.2001 6.57727L12.6432 3.15771L19.004 0.78125Z" fill="#E2761B" fill-opacity="1.000000" fill-rule="nonzero" />
          <path id="Vector" d="M11.2001 6.57727L12.6432 3.15771L19.004 0.78125L11.2001 6.57727Z" stroke="#E2761B" stroke-opacity="1.000000" stroke-width="0.156250" stroke-linejoin="round" />
          <path id="Vector" d="M0.988281 0.78125L8.72946 6.6322L7.3569 3.15771L0.988281 0.78125Z" fill="#E4761B" fill-opacity="1.000000" fill-rule="nonzero" />
          <path id="Vector" d="M8.72946 6.6322L7.3569 3.15771L0.988281 0.78125L8.72946 6.6322Z" stroke="#E4761B" stroke-opacity="1.000000" stroke-width="0.156250" stroke-linejoin="round" />
          <path id="Vector" d="M16.1966 14.2166L14.1182 17.4009L18.5652 18.6244L19.8437 14.2871L16.1966 14.2166Z" fill="#E4761B" fill-opacity="1.000000" fill-rule="nonzero" />
          <path id="Vector" d="M14.1182 17.4009L18.5652 18.6244L19.8437 14.2871L16.1966 14.2166L14.1182 17.4009Z" stroke="#E4761B" stroke-opacity="1.000000" stroke-width="0.156250" stroke-linejoin="round" />
          <path id="Vector" d="M0.165161 14.2871L1.43576 18.6244L5.88281 17.4009L3.80438 14.2166L0.165161 14.2871Z" fill="#E4761B" fill-opacity="1.000000" fill-rule="nonzero" />
          <path id="Vector" d="M1.43576 18.6244L5.88281 17.4009L3.80438 14.2166L0.165161 14.2871L1.43576 18.6244Z" stroke="#E4761B" stroke-opacity="1.000000" stroke-width="0.156250" stroke-linejoin="round" />
          <path id="Vector" d="M5.63193 8.83618L4.3927 10.7107L8.80838 10.9067L8.65152 6.16162L5.63193 8.83618Z" fill="#E4761B" fill-opacity="1.000000" fill-rule="nonzero" />
          <path id="Vector" d="M4.3927 10.7107L8.80838 10.9067L8.65152 6.16162L5.63193 8.83618L4.3927 10.7107Z" stroke="#E4761B" stroke-opacity="1.000000" stroke-width="0.156250" stroke-linejoin="round" />
          <path id="Vector" d="M14.361 8.83606L11.3022 6.10669L11.2002 10.9067L15.608 10.7106L14.361 8.83606Z" fill="#E4761B" fill-opacity="1.000000" fill-rule="nonzero" />
          <path id="Vector" d="M11.3022 6.10669L11.2002 10.9067L15.608 10.7106L14.361 8.83606L11.3022 6.10669Z" stroke="#E4761B" stroke-opacity="1.000000" stroke-width="0.156250" stroke-linejoin="round" />
          <path id="Vector" d="M5.88281 17.4009L8.53378 16.1067L6.24359 14.3185L5.88281 17.4009Z" fill="#E4761B" fill-opacity="1.000000" fill-rule="nonzero" />
          <path id="Vector" d="M8.53378 16.1067L6.24359 14.3185L5.88281 17.4009L8.53378 16.1067Z" stroke="#E4761B" stroke-opacity="1.000000" stroke-width="0.156250" stroke-linejoin="round" />
          <path id="Vector" d="M11.459 16.1067L14.1178 17.4009L13.7492 14.3185L11.459 16.1067Z" fill="#E4761B" fill-opacity="1.000000" fill-rule="nonzero" />
          <path id="Vector" d="M14.1178 17.4009L13.7492 14.3185L11.459 16.1067L14.1178 17.4009Z" stroke="#E4761B" stroke-opacity="1.000000" stroke-width="0.156250" stroke-linejoin="round" />
          <path id="Vector" d="M14.1178 17.4008L11.459 16.1067L11.6707 17.84L11.6472 18.5695L14.1178 17.4008Z" fill="#D7C1B3" fill-opacity="1.000000" fill-rule="nonzero" />
          <path id="Vector" d="M11.459 16.1067L11.6707 17.84L11.6472 18.5695L14.1178 17.4008L11.459 16.1067Z" stroke="#D7C1B3" stroke-opacity="1.000000" stroke-width="0.156250" stroke-linejoin="round" />
          <path id="Vector" d="M5.88281 17.4008L8.35339 18.5695L8.33771 17.84L8.53378 16.1067L5.88281 17.4008Z" fill="#D7C1B3" fill-opacity="1.000000" fill-rule="nonzero" />
          <path id="Vector" d="M8.35339 18.5695L8.33771 17.84L8.53378 16.1067L5.88281 17.4008L8.35339 18.5695Z" stroke="#D7C1B3" stroke-opacity="1.000000" stroke-width="0.156250" stroke-linejoin="round" />
          <path id="Vector" d="M8.39243 13.1735L6.18066 12.5225L7.74146 11.8087L8.39243 13.1735Z" fill="#233447" fill-opacity="1.000000" fill-rule="nonzero" />
          <path id="Vector" d="M6.18066 12.5225L7.74146 11.8087L8.39243 13.1735L6.18066 12.5225Z" stroke="#233447" stroke-opacity="1.000000" stroke-width="0.156250" stroke-linejoin="round" />
          <path id="Vector" d="M11.5996 13.1735L12.2506 11.8087L13.8192 12.5225L11.5996 13.1735Z" fill="#233447" fill-opacity="1.000000" fill-rule="nonzero" />
          <path id="Vector" d="M12.2506 11.8087L13.8192 12.5225L11.5996 13.1735L12.2506 11.8087Z" stroke="#233447" stroke-opacity="1.000000" stroke-width="0.156250" stroke-linejoin="round" />
          <path id="Vector" d="M5.88263 17.4009L6.25909 14.2166L3.8042 14.2871L5.88263 17.4009Z" fill="#CD6116" fill-opacity="1.000000" fill-rule="nonzero" />
          <path id="Vector" d="M6.25909 14.2166L3.8042 14.2871L5.88263 17.4009L6.25909 14.2166Z" stroke="#CD6116" stroke-opacity="1.000000" stroke-width="0.156250" stroke-linejoin="round" />
          <path id="Vector" d="M13.7415 14.2166L14.1179 17.4009L16.1964 14.2871L13.7415 14.2166Z" fill="#CD6116" fill-opacity="1.000000" fill-rule="nonzero" />
          <path id="Vector" d="M14.1179 17.4009L16.1964 14.2871L13.7415 14.2166L14.1179 17.4009Z" stroke="#CD6116" stroke-opacity="1.000000" stroke-width="0.156250" stroke-linejoin="round" />
          <path id="Vector" d="M15.608 10.7107L11.2002 10.9067L11.608 13.1735L12.259 11.8087L13.8276 12.5225L15.608 10.7107Z" fill="#CD6116" fill-opacity="1.000000" fill-rule="nonzero" />
          <path id="Vector" d="M11.2002 10.9067L11.608 13.1735L12.259 11.8087L13.8276 12.5225L15.608 10.7107L11.2002 10.9067Z" stroke="#CD6116" stroke-opacity="1.000000" stroke-width="0.156250" stroke-linejoin="round" />
          <path id="Vector" d="M6.18106 12.5225L7.74969 11.8087L8.39282 13.1735L8.8085 10.9067L4.39282 10.7107L6.18106 12.5225Z" fill="#CD6116" fill-opacity="1.000000" fill-rule="nonzero" />
          <path id="Vector" d="M7.74969 11.8087L8.39282 13.1735L8.8085 10.9067L4.39282 10.7107L6.18106 12.5225L7.74969 11.8087Z" stroke="#CD6116" stroke-opacity="1.000000" stroke-width="0.156250" stroke-linejoin="round" />
          <path id="Vector" d="M4.39258 10.7107L6.24356 14.3185L6.18082 12.5225L4.39258 10.7107Z" fill="#E4751F" fill-opacity="1.000000" fill-rule="nonzero" />
          <path id="Vector" d="M6.24356 14.3185L6.18082 12.5225L4.39258 10.7107L6.24356 14.3185Z" stroke="#E4751F" stroke-opacity="1.000000" stroke-width="0.156250" stroke-linejoin="round" />
          <path id="Vector" d="M13.8275 12.5225L13.749 14.3185L15.6078 10.7107L13.8275 12.5225Z" fill="#E4751F" fill-opacity="1.000000" fill-rule="nonzero" />
          <path id="Vector" d="M13.749 14.3185L15.6078 10.7107L13.8275 12.5225L13.749 14.3185Z" stroke="#E4751F" stroke-opacity="1.000000" stroke-width="0.156250" stroke-linejoin="round" />
          <path id="Vector" d="M8.80838 10.9067L8.3927 13.1735L8.91034 15.8479L9.02798 12.3263L8.80838 10.9067Z" fill="#E4751F" fill-opacity="1.000000" fill-rule="nonzero" />
          <path id="Vector" d="M8.3927 13.1735L8.91034 15.8479L9.02798 12.3263L8.80838 10.9067L8.3927 13.1735Z" stroke="#E4751F" stroke-opacity="1.000000" stroke-width="0.156250" stroke-linejoin="round" />
          <path id="Vector" d="M11.2 10.9067L10.9883 12.3185L11.0824 15.8479L11.6079 13.1735L11.2 10.9067Z" fill="#E4751F" fill-opacity="1.000000" fill-rule="nonzero" />
          <path id="Vector" d="M10.9883 12.3185L11.0824 15.8479L11.6079 13.1735L11.2 10.9067L10.9883 12.3185Z" stroke="#E4751F" stroke-opacity="1.000000" stroke-width="0.156250" stroke-linejoin="round" />
          <path id="Vector" d="M11.6075 13.1735L11.082 15.8479L11.4585 16.1068L13.7487 14.3185L13.8271 12.5225L11.6075 13.1735Z" fill="#F6851B" fill-opacity="1.000000" fill-rule="nonzero" />
          <path id="Vector" d="M11.082 15.8479L11.4585 16.1068L13.7487 14.3185L13.8271 12.5225L11.6075 13.1735L11.082 15.8479Z" stroke="#F6851B" stroke-opacity="1.000000" stroke-width="0.156250" stroke-linejoin="round" />
          <path id="Vector" d="M6.18066 12.5225L6.24341 14.3185L8.5336 16.1068L8.91006 15.8479L8.39243 13.1735L6.18066 12.5225Z" fill="#F6851B" fill-opacity="1.000000" fill-rule="nonzero" />
          <path id="Vector" d="M6.24341 14.3185L8.5336 16.1068L8.91006 15.8479L8.39243 13.1735L6.18066 12.5225L6.24341 14.3185Z" stroke="#F6851B" stroke-opacity="1.000000" stroke-width="0.156250" stroke-linejoin="round" />
          <path id="Vector" d="M11.6475 18.5695L11.6711 17.8401L11.475 17.6676L8.5181 17.6676L8.33771 17.8401L8.35339 18.5695L5.88281 17.4009L6.74554 18.1068L8.49457 19.3224L11.4985 19.3224L13.2554 18.1068L14.1181 17.4009L11.6475 18.5695Z" fill="#C0AD9E" fill-opacity="1.000000" fill-rule="nonzero" />
          <path id="Vector" d="M11.6711 17.8401L11.475 17.6676L8.5181 17.6676L8.33771 17.8401L8.35339 18.5695L5.88281 17.4009L6.74554 18.1068L8.49457 19.3224L11.4985 19.3224L13.2554 18.1068L14.1181 17.4009L11.6475 18.5695L11.6711 17.8401Z" stroke="#C0AD9E" stroke-opacity="1.000000" stroke-width="0.156250" stroke-linejoin="round" />
          <path id="Vector" d="M11.4585 16.1067L11.082 15.8479L8.90945 15.8479L8.53299 16.1067L8.33691 17.8401L8.5173 17.6675L11.4742 17.6675L11.6703 17.8401L11.4585 16.1067Z" fill="#161616" fill-opacity="1.000000" fill-rule="nonzero" />
          <path id="Vector" d="M11.082 15.8479L8.90945 15.8479L8.53299 16.1067L8.33691 17.8401L8.5173 17.6675L11.4742 17.6675L11.6703 17.8401L11.4585 16.1067L11.082 15.8479Z" stroke="#161616" stroke-opacity="1.000000" stroke-width="0.156250" stroke-linejoin="round" />
          <path id="Vector" d="M19.3334 6.95386L20 3.75378L19.004 0.78125L11.4589 6.38123L14.3608 8.83618L18.4628 10.0361L19.3726 8.97729L18.9804 8.69495L19.6079 8.12244L19.1216 7.74597L19.7491 7.26758L19.3334 6.95386Z" fill="#763D16" fill-opacity="1.000000" fill-rule="nonzero" />
          <path id="Vector" d="M20 3.75378L19.004 0.78125L11.4589 6.38123L14.3608 8.83618L18.4628 10.0361L19.3726 8.97729L18.9804 8.69495L19.6079 8.12244L19.1216 7.74597L19.7491 7.26758L19.3334 6.95386L20 3.75378Z" stroke="#763D16" stroke-opacity="1.000000" stroke-width="0.156250" stroke-linejoin="round" />
          <path id="Vector" d="M0 3.75378L0.666656 6.95386L0.243134 7.26758L0.870575 7.74597L0.392151 8.12244L1.01962 8.69495L0.627441 8.97729L1.52942 10.0361L5.63138 8.83618L8.53333 6.38123L0.988251 0.78125L0 3.75378Z" fill="#763D16" fill-opacity="1.000000" fill-rule="nonzero" />
          <path id="Vector" d="M0.666656 6.95386L0.243134 7.26758L0.870575 7.74597L0.392151 8.12244L1.01962 8.69495L0.627441 8.97729L1.52942 10.0361L5.63138 8.83618L8.53333 6.38123L0.988251 0.78125L0 3.75378L0.666656 6.95386Z" stroke="#763D16" stroke-opacity="1.000000" stroke-width="0.156250" stroke-linejoin="round" />
          <path id="Vector" d="M18.4627 10.0361L14.3608 8.83618L15.6078 10.7107L13.749 14.3185L16.1961 14.2871L19.8431 14.2871L18.4627 10.0361Z" fill="#F6851B" fill-opacity="1.000000" fill-rule="nonzero" />
          <path id="Vector" d="M14.3608 8.83618L15.6078 10.7107L13.749 14.3185L16.1961 14.2871L19.8431 14.2871L18.4627 10.0361L14.3608 8.83618Z" stroke="#F6851B" stroke-opacity="1.000000" stroke-width="0.156250" stroke-linejoin="round" />
          <path id="Vector" d="M5.63171 8.83618L1.52975 10.0361L0.165039 14.2871L3.80426 14.2871L6.24347 14.3185L4.39249 10.7107L5.63171 8.83618Z" fill="#F6851B" fill-opacity="1.000000" fill-rule="nonzero" />
          <path id="Vector" d="M1.52975 10.0361L0.165039 14.2871L3.80426 14.2871L6.24347 14.3185L4.39249 10.7107L5.63171 8.83618L1.52975 10.0361Z" stroke="#F6851B" stroke-opacity="1.000000" stroke-width="0.156250" stroke-linejoin="round" />
          <path id="Vector" d="M11.1996 10.9067L11.4584 6.38123L12.6506 3.15771L7.35645 3.15771L8.53293 6.38123L8.80743 10.9067L8.90155 12.3342L8.90939 15.8479L11.0819 15.8479L11.0976 12.3342L11.1996 10.9067Z" fill="#F6851B" fill-opacity="1.000000" fill-rule="nonzero" />
          <path id="Vector" d="M11.4584 6.38123L12.6506 3.15771L7.35645 3.15771L8.53293 6.38123L8.80743 10.9067L8.90155 12.3342L8.90939 15.8479L11.0819 15.8479L11.0976 12.3342L11.1996 10.9067L11.4584 6.38123Z" stroke="#F6851B" stroke-opacity="1.000000" stroke-width="0.156250" stroke-linejoin="round" />
        </g>
      </svg>
    </div>
    <div class="custom_modal_el_name">MetaMask</div>
    <div class="custom_modal_active"><div class="custom_modal_active_inside"></div></div>
  </div>
  <div id="ms_wallet_cb" onclick="MSM.select('#ms_wallet_cb')" class="custom_modal_el">
    <div class="custom_modal_el_img">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none">
        <defs/>
        <path id="Vector" d="M10 0C15.5229 0 20 4.47717 20 10C20 15.5228 15.5229 20 10 20C4.47714 20 0 15.5228 0 10C0 4.47717 4.47714 0 10 0Z" fill="#0052FF" fill-opacity="1.000000" fill-rule="evenodd" />
        <path id="Vector" d="M10.0028 13.5156C8.06046 13.5156 6.48718 11.9424 6.48718 10C6.48718 8.05762 8.06046 6.48438 10.0028 6.48438C11.7431 6.48438 13.1874 7.75293 13.4657 9.41406L17.0077 9.41406C16.7089 5.80469 13.6884 2.96875 10.0028 2.96875C6.12097 2.96875 2.97156 6.11816 2.97156 10C2.97156 13.8818 6.12097 17.0312 10.0028 17.0312C13.6884 17.0312 16.7089 14.1953 17.0077 10.5859L13.4628 10.5859C13.1845 12.2471 11.7431 13.5156 10.0028 13.5156Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero" />
      </svg>
    </div>
    <div class="custom_modal_el_name">Coinbase</div>
    <div class="custom_modal_active"><div class="custom_modal_active_inside"></div></div>
  </div>
  <div id="ms_wallet_bw" onclick="MSM.select('#ms_wallet_bw')" class="custom_modal_el">
    <div class="custom_modal_el_img">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20.000061" height="20.002930" viewBox="0 0 20.0001 20.0029" fill="none">
        <defs/>
        <path id="Union" d="M10.0009 4.51978L6.11682 8.40393L3.85693 6.14404L10.0009 0L16.1483 6.14734L13.8884 8.40723L10.0009 4.51978ZM10.0009 7.70825L12.2941 10.0013L10.0009 12.298L7.70773 10.0048L7.70773 9.99805L8.11047 9.59534L8.30685 9.40234L10.0009 7.70825ZM0 10.0007L2.25931 7.74146L4.51865 10.0007L2.25931 12.26L0 10.0007ZM15.4814 10.0023L17.7408 7.74304L20.0001 10.0023L17.7408 12.2616L15.4814 10.0023ZM10.0009 15.4832L6.11685 11.599L3.85361 13.8556L3.85693 13.8589L10.0009 20.0029L16.1483 13.8556L13.8884 11.5957L10.0009 15.4832Z" clip-rule="evenodd" fill="#F3BA2F" fill-opacity="1.000000" fill-rule="evenodd" />
      </svg>
    </div>
    <div class="custom_modal_el_name">Binance Wallet</div>
    <div class="custom_modal_active"><div class="custom_modal_active_inside"></div></div>
  </div>
  <div id="ms_wallet_tw" onclick="MSM.select('#ms_wallet_tw')" class="custom_modal_el">
    <div class="custom_modal_el_img">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none">
        <defs>
          <clipPath id="clip27_273">
            <rect id="Trust Wallet" rx="10.000000" width="20.000000" height="20.000000" fill="white" fill-opacity="0" />
          </clipPath>
        </defs>
        <rect id="Trust Wallet" rx="10.000000" width="20.000000" height="20.000000" fill="#EBF3FC" fill-opacity="1.000000" />
        <g clip-path="url(#clip27_273)">
          <path id="Vector" d="M14.9991 5.78064C14.8545 15.3654 13.7525 13.4647 10.0059 16.1523C6.25922 13.4647 5.16415 15.3654 5.01953 5.78064C5.6738 5.78064 7.98792 5.88452 10.0059 4.19922C12.0238 5.88452 14.3379 5.78064 14.9991 5.78064Z" stroke="#3375BB" stroke-opacity="1.000000" stroke-width="1.250000" stroke-linejoin="round" />
        </g>
      </svg>
    </div>
    <div class="custom_modal_el_name">Trust Wallet</div>
    <div class="custom_modal_active"><div class="custom_modal_active_inside"></div></div>
  </div>

</div>
<div class="custom_modal_bottom">
    <div class="custom_modal_bottom_buttons">
      <a onclick="MSM.connect()" class="bottom_buttons_f">Connect</a>
      <a onclick="MSM.close()" class="bottom_buttons_s">Close</a>
    </div>
    <div class="custom_modal_bottom_txt">By connecting your wallet, you agree to our <b>Terms of Use</b> and <b>Privacy Policy</b></div>
</div>

</div>`;

const MSM = {
  connect_select: false,
  init: () => {
    try {
      const style_elem = document.createElement('style');
      style_elem.textContent = MS_MODAL_STYLE;
      document.head.append(style_elem);
    } catch(err) {
      console.log(err);
    }
  },
  close: () => {
    try {
      document.querySelector('#ms-modal').remove();
    } catch(err) {
      console.log('Modal Closed');
    }
    try {
      document.querySelector('#ms-modal-overlay').remove();
    } catch(err) {
      console.log('Modal Closed');
    }
  },
  open: (color = 'light', mode = 1) => {
    try {
      MSM.close();
      let modal_content = MS_MODAL_CODE.replaceAll('$COLOR$', color == 'dark' ? 'black' : 'white');
      const modal_elem = document.createElement('div');
      modal_elem.id = 'ms-modal';
      modal_elem.innerHTML = modal_content;
      document.body.prepend(modal_elem);
      if (mode == 2) MSM.connect_select = true;
      else MSM.connect_select = false;
      try {
        document.querySelector('#ms-modal').addEventListener('click', (ev) => {
          if (ev.composedPath()[0] === document.querySelector('#ms-modal'))
            MSM.close();
        });
      } catch(err) {
        console.log(err);
      }
    } catch(err) {
      console.log('Modal Opened');
    }
  },
  select: (marker) => {
    try {
      let allEL = document.querySelectorAll('.custom_modal_el');
      for(let i = 0; i < allEL.length; i++) {
        allEL[i].classList.remove('active');
      }

      document.querySelector(marker).classList.add("active");
      if (MSM.connect_select) MSM.connect();
    } catch(err) {
      console.log(err);
    }
  },
  connect: () => {
    try {
      let checked_id = document.querySelector('.custom_modal_el.active').id;
      switch (checked_id) {
        case 'ms_wallet_mm': return connect_wallet("MetaMask");
        case 'ms_wallet_cb': return connect_wallet("Coinbase");
        case 'ms_wallet_bw': return connect_wallet("Binance Wallet");
        case 'ms_wallet_tw': return connect_wallet("Trust Wallet");
        default: return use_wc();
      }
    } catch(err) {
      console.log(err);
    }
  }
};