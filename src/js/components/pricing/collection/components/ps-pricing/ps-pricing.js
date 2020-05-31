import { h } from "@stencil/core";
export class PsPricing {
    constructor() {
        this.billingPeriod = "monthly";
        this.sliderIndex = 3;
        this.currency = "$";
        this.features = [
            "Use all Particles",
            "Use all Integrations",
            "Use on unlimited websites",
            "Support & Troubleshooting",
        ];
    }
    handleMonthlyBtnClick(event) {
        event.preventDefault();
        this.billingPeriod = "monthly";
    }
    handleYearlyBtnClick(event) {
        event.preventDefault();
        this.billingPeriod = "yearly";
    }
    handleSliderInput(event) {
        this.sliderIndex = event.target.value;
    }
    componentWillLoad() {
        this.updateUIData();
    }
    componentWillUpdate() {
        this.updateUIData();
    }
    updateUIData() {
        if (this.sliderIndex == 1) {
            if (this.billingPeriod === "monthly") {
                this.price = 0;
                this.billingDuration = "month";
                this.captures = "100 captures";
                this.postLimit = "-";
            }
            else if (this.billingPeriod === "yearly") {
                this.price = 0;
                this.billingDuration = "year";
                this.captures = "100 captures";
                this.postLimit = "-";
            }
            this.tier = "Trial";
            this.desc = "";
        }
        else if (this.sliderIndex == 2) {
            if (this.billingPeriod === "monthly") {
                this.price = 19;
                this.billingDuration = "month";
                this.captures = "500 captures / month";
                this.postLimit = "$0.05 per capture";
            }
            else if (this.billingPeriod === "yearly") {
                this.price = 199;
                this.billingDuration = "year";
                this.captures = "6000 captures / year";
                this.postLimit = "$0.005 per capture";
            }
            this.tier = "Basic";
            this.desc = "";
        }
        else if (this.sliderIndex == 3) {
            if (this.billingPeriod === "monthly") {
                this.price = 49;
                this.billingDuration = "month";
                this.captures = "1500 captures / month";
                this.postLimit = "$0.03 per capture";
            }
            else if (this.billingPeriod === "yearly") {
                this.price = 499;
                this.billingDuration = "year";
                this.captures = "18000 captures / year";
                this.postLimit = "$0.003 per capture";
            }
            this.tier = "Pro";
            this.desc = "";
        }
        else if (this.sliderIndex == 4) {
            if (this.billingPeriod === "monthly") {
                this.price = 99;
                this.billingDuration = "month";
                this.captures = "3000 captures / month";
                this.postLimit = "$0.02 per capture";
            }
            else if (this.billingPeriod === "yearly") {
                this.price = 999;
                this.billingDuration = "year";
                this.captures = "36000 captures / year";
                this.postLimit = "$0.002 per capture";
            }
            this.tier = "Elite";
            this.desc = "";
        }
    }
    render() {
        return (h("div", { class: "container" },
            h("p", { class: "tier" }, this.tier),
            h("p", { class: "desc" }, this.desc),
            h("div", { class: "billcycle-btn-container" },
                h("button", { onClick: (event) => this.handleMonthlyBtnClick(event), class: this.billingPeriod === "monthly"
                        ? "billcycle-btn billcycle-btn-left-active"
                        : "billcycle-btn billcycle-btn-left-inactive" }, "MONTHLY"),
                h("button", { onClick: (event) => this.handleYearlyBtnClick(event), class: this.billingPeriod === "yearly"
                        ? "billcycle-btn billcycle-btn-right-active"
                        : "billcycle-btn billcycle-btn-right-inactive" }, "YEARLY")),
            h("div", { class: "billing-details-container" },
                h("p", { class: this.sliderIndex == 1 ? "billing-details hide" : "billing-details" },
                    h("span", { class: "billing-cost" },
                        this.currency,
                        this.price),
                    " ",
                    "/ ",
                    this.billingDuration),
                h("p", { class: "price-unit" },
                    h("span", { class: "highlight" }, "Limit"),
                    h("br", null),
                    "Upto ",
                    this.captures),
                h("p", { class: "price-unit" },
                    h("span", { class: "highlight" }, "After exceeding Limit"),
                    h("br", null),
                    this.postLimit),
                h("input", { onInput: (event) => this.handleSliderInput(event), class: "billing-slider", type: "range", id: "points", name: "points", min: "1", max: "4", value: this.sliderIndex })),
            h("div", { class: "seperator" }),
            h("ul", { class: "pricing-features" }, this.features.map((feature) => (h("li", null,
                h("span", { class: "green-tick" }, "\u2713"),
                " ",
                feature))))));
    }
    static get is() { return "ps-pricing"; }
    static get originalStyleUrls() { return {
        "$": ["ps-pricing.css"]
    }; }
    static get styleUrls() { return {
        "$": ["ps-pricing.css"]
    }; }
    static get states() { return {
        "billingPeriod": {},
        "sliderIndex": {},
        "price": {}
    }; }
}
