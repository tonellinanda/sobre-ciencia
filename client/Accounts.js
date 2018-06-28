T9n.setLanguage("pt");
AccountsTemplates.configure({
  defaultLayoutType: "blaze",
  defaultLayout: "LayoutPrincipal",
  defaultLayoutRegions: {
      nav: "Cabecalho"
  },
  defaultContentRegion: "main"
});

AccountsTemplates.configureRoute("signIn");

var pwd = AccountsTemplates.removeField("password");
AccountsTemplates.removeField("email");
AccountsTemplates.addFields([
  {
    _id: "username",
    type: "text",
    displayName: "username",
    required: true,
    minLength: 3,
  },
  {
    _id: "email",
    type: "email",
    required: true,
    displayName: "email",
    re: /.+@(.+){2,}\.(.+){2,}/,
    errStr: "Invalid email",
  },
  pwd,
  {
  	_id: "name",
    type: "text",
    required: true,
    displayName: "Nome Completo",
    
  },
]);
