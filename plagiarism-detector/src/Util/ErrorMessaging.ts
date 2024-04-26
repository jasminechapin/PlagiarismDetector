// class to hold error messages
export default class ErrorMessaging {
    title: string = "";
    content: string = "";

    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }
} 