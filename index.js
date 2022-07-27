import fetch from 'node-fetch';

const RunApi = async () =>{
  const result =fetch("https://beta.camsonline.com/CAMSServiceSuite/api/CAMSChequeOCR", {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "content-type": "text/plain",
      "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\""
    },
    "referrer": "http://localhost:3000/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "RvsMuVDB44nZQm1b7+UEbovlygfJstTAcebDm0pgulh9TH/kx+GpDqbJ/y3b2sSQz59IjIY1/J+e9UqiADEFvoGFopXEkSiykKhd6FJh6LavVoPCLbL1DqJn5FY+Bcq9y6gZKaXzGI1O7+g4uG10SxvO1vbuV2/g5YXN/1of9gHyyG2nr9FOLy9ELSWGe2gurS7zt0x2slQG/lYC4MKDevMekpxyQAOIdbtO05eSvmi3I8WE3HTvg00FHa8nIRllsAwEbL8VwFBRJocXc2azQ8kFuKBSAWxe8qB07GdVuTy2a1eCskD1wQmir657xQ17saGr1TbrvPzHpf+G9M4Zo2tkWsbhctbVsUs2L2vdw8Q=.bSZAhbxpSo5Hb1P4qpz1z+iK7485VbDGZma5oQmHnxB362KmtDOk7zO7CYFJ8kZtbSn4hRCXUnU1inBSGq+D61A7xi+8tlGBQ/m5DlPf46M=",
    "method": "POST",
    "mode": "cors",
    "credentials": "omit"
  }).then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


  // result.then((out)=>{
  //   console.log(result);
  // })
  // console.log(result.data);
}

RunApi();