import { h } from "@stencil/core";
import { emailCheck } from "../../utils/utils";
export class GecParticle {
    constructor() {
        this.gecState = "disabled";
        this.isTextboxFocused = false;
        this.email = "";
        this.gecUI = {
            btn: {
                text: this.btnText,
                enabled: "gec-btn",
                disabled: "gec-btn gec-btn-disabled"
            },
            emailBox: {
                enabled: "gec-emailbox",
                valid: "gec-emailbox gec-email-valid",
                invalid: "gec-emailbox gec-email-invalid",
                disabled: "gec-emailbox gec-emailbox-disabled"
            }
        };
        this.gecBtnStyle = this.gecUI.btn.disabled;
        this.gecEmailBoxStyle = this.gecUI.emailBox.enabled;
    }
    handleKeyDown(ev) {
        if (ev.keyCode === 13) {
            if (this.isTextboxFocused === true && this.gecBtnStyle === "gec-btn")
                this.handleBtnClick(ev);
        }
    }
    handleEmailInput(event) {
        this.email = event.target.value;
        emailCheck(this.email)
            ? (this.gecState = "enabled")
            : (this.gecState = "disabled");
    }
    handleTextboxFocus() {
        this.isTextboxFocused = true;
    }
    handleTextboxBlur() {
        this.isTextboxFocused = false;
    }
    handleBtnClick(event) {
        event.preventDefault();
        this.gecState = "submitting";
        const url = "https://gec-api.particle.systems";
        const obj = {
            gecId: this.pid,
            email: this.email,
            gecLoc: this.loc
        };
        const options = {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        };
        fetch(url, options)
            .then(res => res.json())
            .then(data => {
            if (data.status === "success") {
                this.gecState = "submitted";
            }
            else if (data.status === "failed") {
                this.gecState === "failed";
            }
        })
            .catch(error => {
            console.log(`Error: ${error}`);
            this.gecState = "failed";
        });
    }
    componentWillUpdate() {
        if (this.gecState === "disabled") {
            this.gecBtnStyle = this.gecUI.btn.disabled;
            if (this.colorValidation === "true")
                this.gecEmailBoxStyle = this.gecUI.emailBox.invalid;
            this.gecUI.btn.text = this.btnText;
        }
        else if (this.gecState === "enabled") {
            this.gecBtnStyle = this.gecUI.btn.enabled;
            if (this.colorValidation === "true")
                this.gecEmailBoxStyle = this.gecUI.emailBox.valid;
            this.gecUI.btn.text = this.btnText;
        }
        else if (this.gecState === "submitting") {
            this.gecBtnStyle = this.gecUI.btn.disabled;
            this.gecEmailBoxStyle = this.gecUI.emailBox.disabled;
            this.gecUI.btn.text = this.btnTextOnsubmit;
        }
        else if (this.gecState === "failed") {
            this.gecBtnStyle = this.gecUI.btn.disabled;
            this.gecUI.btn.text = this.btnText;
            this.gecEmailBoxStyle = this.gecUI.emailBox.enabled;
        }
    }
    render() {
        return (h("div", { class: "gec-container" }, this.gecState === "disabled" ||
            this.gecState === "enabled" ||
            this.gecState === "submitting" ||
            this.gecState === "failed" ? (h("div", null,
            h("label", { class: "gec-label", htmlFor: "gec-email-box" }, this.label),
            h("div", { class: "gec-boxbtn-container" },
                h("input", { type: "email", id: "gec-email-box", name: "gec-email-box", value: "", placeholder: this.placeholder, class: this.gecEmailBoxStyle, onInput: (event) => this.handleEmailInput(event), onFocus: () => this.handleTextboxFocus(), onBlur: () => this.handleTextboxBlur(), ref: el => (this.emailBoxElem = el) }),
                h("button", { class: this.gecBtnStyle, onClick: (event) => this.handleBtnClick(event), tabIndex: this.gecBtnStyle === "gec-btn gec-btn-disabled" ? -1 : 0 }, this.gecUI.btn.text)),
            h("small", { class: "gec-sub-text" }, this.subText),
            this.gecState === "failed" ? (h("div", { class: "gec-failed-container" },
                h("span", { class: "gec-failed-msg" }, this.submitFailedMsg))) : (``))) : (h("div", { class: "gec-success-container" },
            h("span", { class: "gec-success-msg" }, this.submitSuccessMsg)))));
    }
    static get is() { return "gec-particle"; }
    static get originalStyleUrls() { return {
        "$": ["gec-particle.css"]
    }; }
    static get styleUrls() { return {
        "$": ["gec-particle.css"]
    }; }
    static get properties() { return {
        "pid": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "pid",
            "reflect": false
        },
        "loc": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "loc",
            "reflect": false
        },
        "label": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "label",
            "reflect": false
        },
        "placeholder": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "placeholder",
            "reflect": false
        },
        "btnText": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "btn-text",
            "reflect": false
        },
        "btnTextOnsubmit": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "btn-text-onsubmit",
            "reflect": false
        },
        "subText": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "sub-text",
            "reflect": false
        },
        "submitSuccessMsg": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "submit-success-msg",
            "reflect": false
        },
        "submitFailedMsg": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "submit-failed-msg",
            "reflect": false
        },
        "colorValidation": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "color-validation",
            "reflect": false
        }
    }; }
    static get states() { return {
        "gecState": {}
    }; }
    static get listeners() { return [{
            "name": "keydown",
            "method": "handleKeyDown",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
