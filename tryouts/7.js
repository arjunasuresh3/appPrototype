var MyPanel = Y.Base.create('MyPanel',Y.Panel,[],{
                                _viewSetter:function(value) {
                                    if (!value instanceof Y.View){
                                        return Y.Attribute.INVALID_VALUE;
                                    }
                                    var oldView = this.get('view');
                                    if (oldView){
                                        oldView.destroy();
                                    }
                                    value.render(this.get('body'));
                                    return value;
                                }
                            },{
                                ATTRS:{
                                    view:{
                                        setter:"_viewSetter"
                                    }
                                }
                                
                            });