import { mount } from '@vue/test-utils'
import MyButton from '../components/UI/Button.vue'

describe('MyButton.vue', () => {
  it('renders a button with the correct classes when primary is true', () => {
    const wrapper = mount(MyButton, {
      props: {
        primary: true
      },
      slots: {
        default: 'My Button Text'
      }
    })

    expect(wrapper.find('button').classes()).toContain('bg-primary')
    expect(wrapper.text()).toBe('My Button Text')
  })

  it('renders a button with the correct classes when primary is false', () => {
    const wrapper = mount(MyButton, {
      props: {
        primary: false
      },
      slots: {
        default: 'My Button Text'
      }
    })

    expect(wrapper.find('button').classes()).not.toContain('bg-primary')
    expect(wrapper.text()).toBe('My Button Text')
  })
})
