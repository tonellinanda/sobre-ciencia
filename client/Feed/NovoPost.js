Template.NovoPost.onCreated(function() {
	this.urlDaimagem = new ReactiveVar();
});

Template.NovoPost.events({
	"submit form": function(evento, template) {
		event.preventDefault();
		var textoDoFormulario = evento.target.texto.value;
		var urlDaimagem = template.urlDaimagem.get();
		
		Meteor.call("inserirPost", textoDoFormulario, urlDaimagem);
		
		evento.target.texto.value = "";
	},
	"change .myFileInput": function(event, template) {
        FS.Utility.eachFile(event, function(file) {
            Images.insert(file, function (err, fileObj) {
                if (err) {
                    // handle error
                } else {
                    template.urlDaimagem.set("/cfs/files/images/" + fileObj._id);
                }
            });
        });
    }
});
