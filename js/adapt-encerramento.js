define([
  'core/js/adapt',
  'core/js/views/componentView',
  'core/js/models/componentModel'
], function(Adapt, ComponentView, ComponentModel) {

  const EncerramentoView = ComponentView.extend({
    postRender: function() {
      this.setReadyStatus();
      this.setupInviewCompletion();
      this.changeColorBlock();
    },

    changeColorBlock: function(){      
      this.$el[0].parentNode.parentNode.classList.add('gray-bg');
    }
  });

  const EncerramentoModel = ComponentModel.extend({
    // Implement your component model
  });

  return Adapt.register('encerramento', {
    model: EncerramentoModel,
    view: EncerramentoView
  });

});
