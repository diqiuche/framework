(function ($) {
    require(["../assets/lib/kendoUI/js/kendo.validator.js",
        "../assets/lib/kendoUI/js/kendo.multiselect.js"], function () {

        var Fn = {
            selectParentOption: {
                dataSource: {
                    transport: {
                        read: {
                            url: BASEPATH + "attr/queryAllAttr",
                            dataType: "json"
                        }
                    }
                }
            },
            selectInputTypeOption: {
                dataSource: {
                    transport: {
                        read: {
                            url: BASEPATH + "attr/queryInputType",
                            dataType: "json"
                        }
                    }
                }
            },
            selectDataTypeOption: {
                dataSource: {
                    transport: {
                        read: {
                            url: BASEPATH + "attr/queryDataType",
                            dataType: "json"
                        }
                    }
                }
            },
            init: function () {
            	var $this = this;
            	$("#parentAttrId").kendoMultiSelect({
                    placeholder: "请选择父属性",
                    dataTextField: "attrName",
                    dataValueField: "attrId",
                    autoBind: false,
                    maxSelectedItems : 1,
                    dataSource: $this.selectParentOption.dataSource
                });
            	$("#inputType").kendoMultiSelect({
                    placeholder: "请选择输入类型",
                    dataTextField: "dictDataName",
                    dataValueField: "dictDataValue",
                    autoBind: false,
                    maxSelectedItems : 1,
                    dataSource: $this.selectInputTypeOption.dataSource
                });
            	$("#dataType").kendoMultiSelect({
                    placeholder: "请选择数据类型",
                    dataTextField: "dictDataName",
                    dataValueField: "dictDataValue",
                    autoBind: false,
                    maxSelectedItems : 1,
                    dataSource: $this.selectDataTypeOption.dataSource
                });
            	$("#addForm").kendoValidator();
                $('#submitBtn').on('click', function () {
                        var form = $("#addForm"), validator = form.kendoValidator().data("kendoValidator");
                        if (validator.validate()) {
                            form.submit();
                        }
                    }
                );

            }
        };
        $(Fn.init.bind(Fn));
    });
})(jQuery);