import Badge from '../../components/badge/Badge.vue'

export default {
    title: "Atoms/Badge",
    component: Badge
}

const Template = (args) => ({
    components: {Badge},
    setup() {
        return {args};
    },
    template: '<Badge v-bind="args" />'
})

export const BadgeSimple = Template.bind({});
BadgeSimple.args = {}
