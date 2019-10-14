GraphLang_shape_designer = {};
GraphLang_shape_designer.filter = {};

GraphLang_shape_designer.filter.GeneratedCodeFilter = shape_designer.filter.Filter.extend({
    NAME :"GaphLang_shape_designer.filter.GeneratedCodeFilter",
	init:function(){
	    this._super();
	},
	insertPane: function(figure, $parent){

	   var _this = this;
	   var type =figure.getInputType();
	   $parent.append(
       '<div id="'+this.cssScope+'_container" class="panel panel-default">'+
       '  <div class="panel-heading filter-heading" data-toggle="collapse" data-target="#'+this.cssScope+'_panel">'+
       '     LuboJ. Generated C/C++ code'+
       '  </div>'+
  	   '  <div class="panel-body collapse in" id="'+this.cssScope+'_panel">'+
  	   '   <div class="form-group generatedCodePanel">'+
       '     <form name="generatedCodeForm" action="">'+
       '       <textarea name="Text1" cols="20" rows="5">This is default text for form for generated code.</textarea>'+
       '     </form>'+
		   '   </div>'+
       '  </div>'+
       '</div>'+
       ''
//  	   '</div>'
     );

	       $("#"+_this.cssScope+"_panel .portTypeOption input").on("change", function(){
	           var $this = $(this);
	           var typeName = $this.data("type");
	           figure.setInputType(typeName);
	       });
	   }
});
