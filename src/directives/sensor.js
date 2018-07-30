export default {
  bind(el, {arg}, vnode) {
    const vm = vnode.context;
    const sensors = ['click', 'focus'];

    if (!sensors.includes(arg)) {
        if (process.env.NODE_ENV !== 'production') {
        console.warn(`${arg} is not a valid sensor (${sensors.join(', ')})`);
        }

        return;
    };

    el.addEventListener(arg, e => {
        this.track({
          category: arg,
          action: 'From value',
          label: 'From value',
          value: 'From value',
        });
    });
  },
};