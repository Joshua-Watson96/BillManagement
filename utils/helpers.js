
import { BsFillLightbulbFill } from "react-icons/bs";
import { BsFire } from "react-icons/bs";
import { BsFillDropletFill } from "react-icons/bs";
import { BsFillRouterFill } from "react-icons/bs";
import { BsFillHeartPulseFill } from "react-icons/bs";
import { BsFillHouseHeartFill } from "react-icons/bs";
import { BsCarFrontFill } from "react-icons/bs";
import { BsFillClipboardCheckFill } from "react-icons/bs";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { BsFillEasel3Fill } from "react-icons/bs";
import { BsClipboard2DataFill } from "react-icons/bs";
import { BsCreditCardFill } from "react-icons/bs";

import { BsFillClockFill } from "react-icons/bs";


getIcon = (category) => {
    // const category =
    if (category === "Electricity") {
      return `<span> ${BsFillLightbulbFill} <span>`;
    }
    else if (category === "Gas") {
      return `<span> ${BsFire} <span>`;
    }
    else if (category === "Water") {
      return `<span> ${BsFillDropletFill} <span>`;
    }
    else if (category === "Internet") {
      return `<span> ${BsFillRouterFill} <span>`;
    }
     else if (category === "Health Insurance") {
      return `<span> ${BsFillHeartPulseFill} <span>`;
    }
    else if (category === "Home Insurance") {
      return `<span> ${BsFillHouseHeartFill} <span>`;
    }
    else if (category === "Car Insurance") {
      return `<span> ${BsCarFrontFill} <span>`;
    }
    else if (category === "Car Registration") {
      return `<span> ${BsFillClipboardCheckFill} <span>`;
    }
    else if (category === "Phone Bill") {
      return `<span> ${BsFillPhoneVibrateFill} <span>`;
    }
    else if (category === "School Fee") {
      return `<span> ${BsFillEasel3Fill} <span>`;
    }
    else if (category === "Coucil Rates") {
      return `<span> ${BsClipboard2DataFill} <span>`;
    }
    else {
        return `<span> ${BsCreditCardFill} <span>`;
    };
};


upcomingIcon = () => {
  return `<span> ${BsFillClockFill} <span>`
}

module.exports = {
  getIcon,
  upcomingIcon
}