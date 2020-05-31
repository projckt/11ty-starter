export declare class GecParticle {
    emailBoxElem: HTMLInputElement;
    pid: string;
    loc: string;
    label: string;
    placeholder: string;
    btnText: string;
    btnTextOnsubmit: string;
    subText: string;
    submitSuccessMsg: string;
    submitFailedMsg: string;
    colorValidation: string;
    gecState: string;
    handleKeyDown(ev: KeyboardEvent): void;
    private isTextboxFocused;
    private email;
    private gecUI;
    private gecBtnStyle;
    private gecEmailBoxStyle;
    private handleEmailInput;
    private handleTextboxFocus;
    private handleTextboxBlur;
    private handleBtnClick;
    componentWillUpdate(): void;
    render(): any;
}
