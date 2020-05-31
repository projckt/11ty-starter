export declare class PsPricing {
    billingPeriod: string;
    sliderIndex: number;
    price: number;
    private tier;
    private desc;
    private currency;
    private billingDuration;
    private captures;
    private postLimit;
    private features;
    handleMonthlyBtnClick(event: any): void;
    handleYearlyBtnClick(event: any): void;
    handleSliderInput(event: any): void;
    componentWillLoad(): void;
    componentWillUpdate(): void;
    updateUIData(): void;
    render(): any;
}
