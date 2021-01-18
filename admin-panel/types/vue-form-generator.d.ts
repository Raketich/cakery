export namespace abstractField {
    const computed: {
        value: {
            cache: boolean;
            get: Function;
            set: Function;
        };
    };
    function data(): any;
    const directives: {
        attributes: {
            bind: Function;
            componentUpdated: Function;
            updated: Function;
        };
    };
    namespace methods {
        function clearValidationErrors(): void;
        class debouncedValidate {
            debouncedValidateFunc: any;
        }
        function formatValueToField(t: any): any;
        function formatValueToModel(t: any): any;
        function getFieldClasses(): any;
        function getFieldID(t: any, ...args: any[]): any;
        function setModelValueByPath(t: any, e: any): void;
        function updateModelValue(t: any, e: any): void;
        function validate(t: any): any;
    }
    const props: string[];
}
export namespace component {
    const beforeCreate: Function[];
    const components: {
        formGroup: {
            beforeCreate: any[];
            components: {
                fieldCheckbox: any;
                fieldChecklist: any;
                fieldCleave: any;
                fieldDateTimePicker: any;
                fieldGoogleAddress: any;
                fieldImage: any;
                fieldInput: any;
                fieldLabel: any;
                fieldMasked: any;
                fieldNoUiSlider: any;
                fieldPikaday: any;
                fieldRadios: any;
                fieldRangeSlider: any;
                fieldSelect: any;
                fieldSelectEx: any;
                fieldSpectrum: any;
                fieldStaticMap: any;
                fieldSubmit: any;
                fieldSwitch: any;
                fieldTextArea: any;
                fieldUpload: any;
                fieldVueMultiSelect: any;
            };
            methods: {
                buttonClickHandler: any;
                buttonVisibility: any;
                clearValidationErrors: any;
                fieldErrors: any;
                fieldHint: any;
                fieldTypeHasLabel: any;
                getButtonType: any;
                getFieldID: any;
                getFieldType: any;
                onFieldValidated: any;
                onModelUpdated: any;
                validate: any;
            };
            mixins: any[];
            name: string;
            props: {
                errors: any;
                field: any;
                model: any;
                options: any;
                vfg: any;
            };
            render: Function;
            staticRenderFns: any[];
        };
    };
    namespace computed {
        function fields(): any;
        function groups(): any;
    }
    function data(): any;
    namespace methods {
        function clearValidationErrors(): void;
        function fieldVisible(t: any): any;
        class onFieldValidated {
            constructor(t: any, e: any, n: any);
            errors: any;
        }
        function onModelUpdated(t: any, e: any): void;
        function validate(...args: any[]): any;
    }
    const mixins: {
        methods: {
            fieldDisabled: any;
            fieldErrors: any;
            fieldFeatured: any;
            fieldReadonly: any;
            fieldRequired: any;
            getFieldRowClasses: any;
        };
    }[];
    function mounted(): void;
    const name: string;
    namespace props {
        namespace isNewModel {
            function type(p0: any): any;
        }
        function model(p0: any): any;
        namespace model {
            function assign(p0: any, p1: any): any;
            function create(p0: any, p1: any): any;
            function defineProperties(p0: any, p1: any): any;
            function defineProperty(p0: any, p1: any, p2: any): any;
            function entries(p0: any): any;
            function freeze(p0: any): any;
            function getOwnPropertyDescriptor(p0: any, p1: any): any;
            function getOwnPropertyDescriptors(p0: any): any;
            function getOwnPropertyNames(p0: any): any;
            function getOwnPropertySymbols(p0: any): any;
            function getPrototypeOf(p0: any): any;
            function is(p0: any, p1: any): any;
            function isExtensible(p0: any): any;
            function isFrozen(p0: any): any;
            function isSealed(p0: any): any;
            function keys(p0: any): any;
            function preventExtensions(p0: any): any;
            function seal(p0: any): any;
            function setPrototypeOf(p0: any, p1: any): any;
            function values(p0: any): any;
        }
        namespace multiple {
            function type(p0: any): any;
        }
        namespace options {
            function type(p0: any): any;
            namespace type {
                // Too-deep object hierarchy from vfg.component.props.options.type
                const assign: any;
                // Too-deep object hierarchy from vfg.component.props.options.type
                const create: any;
                // Too-deep object hierarchy from vfg.component.props.options.type
                const defineProperties: any;
                // Too-deep object hierarchy from vfg.component.props.options.type
                const defineProperty: any;
                // Too-deep object hierarchy from vfg.component.props.options.type
                const entries: any;
                // Too-deep object hierarchy from vfg.component.props.options.type
                const freeze: any;
                // Too-deep object hierarchy from vfg.component.props.options.type
                const getOwnPropertyDescriptor: any;
                // Too-deep object hierarchy from vfg.component.props.options.type
                const getOwnPropertyDescriptors: any;
                // Too-deep object hierarchy from vfg.component.props.options.type
                const getOwnPropertyNames: any;
                // Too-deep object hierarchy from vfg.component.props.options.type
                const getOwnPropertySymbols: any;
                // Too-deep object hierarchy from vfg.component.props.options.type
                const getPrototypeOf: any;
                // Too-deep object hierarchy from vfg.component.props.options.type
                const is: any;
                // Too-deep object hierarchy from vfg.component.props.options.type
                const isExtensible: any;
                // Too-deep object hierarchy from vfg.component.props.options.type
                const isFrozen: any;
                // Too-deep object hierarchy from vfg.component.props.options.type
                const isSealed: any;
                // Too-deep object hierarchy from vfg.component.props.options.type
                const keys: any;
                // Too-deep object hierarchy from vfg.component.props.options.type
                const preventExtensions: any;
                // Too-deep object hierarchy from vfg.component.props.options.type
                const seal: any;
                // Too-deep object hierarchy from vfg.component.props.options.type
                const setPrototypeOf: any;
                // Too-deep object hierarchy from vfg.component.props.options.type
                const values: any;
            }
        }
        function schema(p0: any): any;
        namespace schema {
            function assign(p0: any, p1: any): any;
            function create(p0: any, p1: any): any;
            function defineProperties(p0: any, p1: any): any;
            function defineProperty(p0: any, p1: any, p2: any): any;
            function entries(p0: any): any;
            function freeze(p0: any): any;
            function getOwnPropertyDescriptor(p0: any, p1: any): any;
            function getOwnPropertyDescriptors(p0: any): any;
            function getOwnPropertyNames(p0: any): any;
            function getOwnPropertySymbols(p0: any): any;
            function getPrototypeOf(p0: any): any;
            function is(p0: any, p1: any): any;
            function isExtensible(p0: any): any;
            function isFrozen(p0: any): any;
            function isSealed(p0: any): any;
            function keys(p0: any): any;
            function preventExtensions(p0: any): any;
            function seal(p0: any): any;
            function setPrototypeOf(p0: any, p1: any): any;
            function values(p0: any): any;
        }
        namespace tag {
            function type(p0: any): any;
            namespace type {
                // Too-deep object hierarchy from vfg.component.props.tag.type
                const fromCharCode: any;
                // Too-deep object hierarchy from vfg.component.props.tag.type
                const fromCodePoint: any;
                // Too-deep object hierarchy from vfg.component.props.tag.type
                const raw: any;
            }
            function validator(t: any): any;
        }
    }
    function render(): any;
    const staticRenderFns: any[];
    namespace watch {
        function model(t: any, e: any): void;
    }
}
export const fieldComponents: any;
export function install(e: any, n: any): void;
export const schema: {
    createDefaultObject: any;
    getMultipleFields: any;
    mergeMultiObjectFields: any;
    slugify: any;
    slugifyFormID: any;
};
export namespace validators {
    function alpha(t: any, e: any, n: any, ...args: any[]): any;
    namespace alpha {
        function locale(t: any): any;
    }
    function alphaNumeric(t: any, e: any, n: any, ...args: any[]): any;
    namespace alphaNumeric {
        function locale(t: any): any;
    }
    function array(t: any, e: any, n: any, ...args: any[]): any;
    namespace array {
        function locale(t: any): any;
    }
    function creditCard(t: any, e: any, n: any, ...args: any[]): any;
    namespace creditCard {
        function locale(t: any): any;
    }
    function date(t: any, e: any, n: any, ...args: any[]): any;
    namespace date {
        function locale(t: any): any;
    }
    function double(t: any, e: any, n: any, ...args: any[]): any;
    namespace double {
        function locale(t: any): any;
    }
    function email(t: any, e: any, n: any, ...args: any[]): any;
    namespace email {
        function locale(t: any): any;
    }
    function integer(t: any, e: any, n: any, ...args: any[]): any;
    namespace integer {
        function locale(t: any): any;
    }
    function number(t: any, e: any, n: any, ...args: any[]): any;
    namespace number {
        function locale(t: any): any;
    }
    function regexp(t: any, e: any, n: any, ...args: any[]): any;
    namespace regexp {
        function locale(t: any): any;
    }
    function required(t: any, e: any, n: any, ...args: any[]): any;
    namespace required {
        function locale(t: any): any;
    }
    const resources: {
        dateIsEarly: string;
        dateIsLate: string;
        fieldIsRequired: string;
        invalidCard: string;
        invalidCardNumber: string;
        invalidDate: string;
        invalidEmail: string;
        invalidFormat: string;
        invalidInteger: string;
        invalidNumber: string;
        invalidTextContainNumber: string;
        invalidTextContainSpec: string;
        invalidURL: string;
        numberTooBig: string;
        numberTooSmall: string;
        selectMaxItems: string;
        selectMinItems: string;
        textTooBig: string;
        textTooSmall: string;
        thisNotArray: string;
        thisNotText: string;
    };
    function string(t: any, e: any, n: any, ...args: any[]): any;
    namespace string {
        function locale(t: any): any;
    }
    function url(t: any, e: any, n: any, ...args: any[]): any;
    namespace url {
        function locale(t: any): any;
    }
}
