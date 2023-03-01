import validate from "./validate.js";
const validateUrl = (value) => {
  const reg = new RegExp(
    /^(https?:\/\/)?[^\s\/]+\.[^\s\/]+\/\S+\.(jpg|jpeg|png|gif)$/
  );

  return validate(reg, value, 5, 3000).map((err) => `url is ${err}`);
};

export default validateUrl;

//  "/^https?://(?:www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/";

//^(https?|ftp)://[^s/$.?#].[^s]*$
// ^[https?|ftp]+//(-.)?([^s/?.#-]+.?)+([^s]*)?$/
//
//https?://(www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)
/* 
  const reg = new RegExp(
    "/^https?://(?:www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/"
  ); */
// " /^(https?://)?[^s/]+.[^s/]+/S+.(jpg|jpeg|png|gif)$/"
