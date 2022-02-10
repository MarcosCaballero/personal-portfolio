const Contact = (
  contact: { email: string; name: string }[] = [],
  action: { type: string; payload: number[] | ""[] | {}[] }
) => {
  switch (action.type) {
    case "contact":
      return;
    default:
      return contact;
  }
};

export default Contact;
