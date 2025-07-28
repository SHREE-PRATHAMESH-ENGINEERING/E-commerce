export const categoryMenuList = [
  {
    id: 1,
    title: "Single Layer PCBs",
    src: "/laptop icon.png",
    href: "/shop/single-layer-pcbs"
  },
  {
    id: 2,
    title: "Multi Layer PCBs",
    src: "/pc 1.png",
    href: "/shop/multi-layer-pcbs"
  },
  {
    id: 3,
    title: "Flex PCBs",
    src: "/mouse icon.png",
    href: "/shop/flex-pcbs"
  },
  {
    id: 4,
    title: "Rigid-Flex PCBs",
    src: "/camera icon.png",
    href: "/shop/rigid-flex-pcbs"
  },
  {
    id: 5,
    title: "Prototype PCBs",
    src: "/headphone icon.png",
    href: "/shop/prototype-pcbs"
  },
];

export const incentives = [
  {
    name: "Fast PCB Manufacturing",
    description:
      "Quick turnaround times for prototype and production PCBs with industry-leading quality standards.",
    imageSrc: "/fast shopping icon.png",
  },
  {
    name: "Quality Assurance",
    description:
      "100% electrical testing and visual inspection ensures your PCBs meet specification requirements.",
    imageSrc: "/support icon.png",
  },
  {
    name: "Professional Support",
    description:
      "Expert technical support team available to help with design optimization and manufacturing queries.",
    imageSrc: "/shipping icon.png",
  },
];

export const navigation = {
  sale: [
    { name: "PCB Prototypes", href: "#" },
    { name: "Volume Discounts", href: "#" },
  ],
  about: [
    { name: "About Us", href: "#" },
    { name: "Quality Standards", href: "#" },
  ],
  buy: [
    { name: "PCB Design Guidelines", href: "#" },
    { name: "Shipping Info", href: "#" },
  ],
  help: [
    { name: "Technical Support", href: "#" },
    { name: "PCB FAQ", href: "#" },
  ],
};

export const isValidNameOrLastname = (input: string) => {
  // Simple name or lastname regex format check
  const regex = /^[a-zA-Z\s]+$/;
  return regex.test(input);
};

export const isValidEmailAddressFormat = (input: string) => {
  // simple email address format check
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(input);
};

export const isValidCardNumber = (input: string) => {
  // Remove all non-digit characters
  const cleanedInput = input.replace(/[^0-9]/g, "");
  // test for credit card number between 13 and 19 characters
  const regex = /^\d{13,19}$/;
  return regex.test(cleanedInput);
}

export const isValidCreditCardExpirationDate = (input: string) => {
  // simple expiration date format check
  const regex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
  return regex.test(input);
};

export const isValidCreditCardCVVOrCVC = (input: string) => {
  // simple CVV or CVC format check
  const regex = /^[0-9]{3,4}$/;
  return regex.test(input);
};
