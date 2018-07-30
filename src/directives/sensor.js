export default {
  bind(el, {arg}, vnode) {
    const vm = vnode.context;
    const events = ['click', 'focus'];

    if (!events.includes(arg)) {
        if (process.env.NODE_ENV !== 'production') {
        console.warn(`[vue-sensor] ${arg} is not a valid event (${events.join(', ')})`);
        }

        return;
    };

    el.addEventListener(arg, e => {
        console.log(this, vm)
    });
  },
};
