export default {
    install(Vue) {
        if (this.installed) {
            return;
        }

        this.installed = true;
        this.caller = null;

        Vue.prototype.$context = {
            EventBus: new Vue(),

            showContext({
                event,
                items
            }) {
                const caller = event.target;
                if (this.caller !== caller) {
                    this.caller = caller;
                    this.EventBus.$emit("showContext", {
                        caller,
                        items
                    });
                } else {
                    this.hideContext();
                }

            },

            hideContext() {
                this.caller = null;
                this.EventBus.$emit("hideContext");
            }
        }
    }
}