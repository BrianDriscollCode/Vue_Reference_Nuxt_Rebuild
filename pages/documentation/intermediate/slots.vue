<template>
  <section class="contentWrapper">
    <div class="mainContent">
      <TopBar />
      <div class="mainContentContainer">
        <h1> Slots </h1>

        <p>
          In Vue.js, a slot is a place where a component can inject content. This allows
          for greater flexibility in the structure and layout of a component.
        </p>

        <h2> Default Slot </h2>

        <p>
          The default slot is used when a component does not have a named
          slot. This slot can be used to pass content to the component that
          will be rendered in the default location.
        </p>

        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;My Component&lt;/h1&gt;
    &lt;slot&gt;&lt;/slot&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  name: 'MyComponent'
}
&lt;/script&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

        <p>
          In this example, any content passed to the <mark>MyComponent</mark> component
          will be rendered in the location of the
          <mark>&lt;slot&gt;&lt;/slot&gt;</mark> element.
        </p>

        <h2> Names Slots </h2>
        <p>
          Named slots allow for more specific placement of content within a
          component. To create a named slot, you must give the <mark>slot</mark> element
          a <mark>name</mark> attribute.
        </p>

        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;My Component&lt;/h1&gt;
    &lt;slot name="header"&gt;&lt;/slot&gt;
    &lt;slot name="footer"&gt;&lt;/slot&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  name: 'MyComponent'
}
&lt;/script&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

        <p>
          In this example, content passed to the <mark>MyComponent</mark> component with
          the <mark>header</mark> slot attribute will be rendered in the location of the
          <mark>&lt;slot name="header"&gt;&lt;/slot&gt;</mark> element, and content passed to the
          <mark>MyComponent</mark> component with the footer slot attribute will be
          rendered in the location of the <mark>&lt;slot name="footer"&gt;&lt;/slot&gt;</mark>
          element.
        </p>

        <h2> Scoped Slots </h2>
        <p>
          Scoped slots allow for more dynamic content injection, by passing a function
          to the slot. The function receives an object with any passed props, and
          should return a template.
        </p>
        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;My Component&lt;/h1&gt;
    &lt;slot :item="item" v-bind="item"&gt;&lt;/slot&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  name: 'MyComponent',
  props: &#91;'item'&#93;
}
&lt;/script&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
&lt;template&gt;
  &lt;my-component :item="item"&gt;
    &lt;template v-slot:default="slotProps"&gt;
      &lt;div&gt;
        &lt;h2&gt;{ { slotProps.item.title } }&lt;/h2&gt;
        &lt;p&gt;{ { slotProps.item.description } }&lt;/p&gt;
      &lt;/div&gt;
    &lt;/template&gt;
  &lt;/my-component&gt;
&lt;/template&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->
        <p>
          In this example, the parent component will pass down an object
          slotProps to the scoped slot, and the slotProps object will contain
          the item data and any other data passed to the slot.
        </p>

        <h2> Slot Props </h2>
        <p> You can also pass props to a slot, which allows for more dynamic content injection </p>
        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;My Component&lt;/h1&gt;
    &lt;slot :item="item" v-bind="item"&gt;&lt;/slot&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  name: 'MyComponent',
  props: &#91;'item'&#93;
}
&lt;/script&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

        <p>
          In this example, the <mark>MyComponent</mark> component has a prop called
          <mark>item</mark> which is passed to the slot with the :item attribute.
          The <mark>v-bind="item"</mark> attribute binds all properties of the <mark>item</mark>
          object to the slot.
        </p>
        <p>
          In the parent component, you can access these props by using the v-slot directive and
          specifying the name of the slot.
        </p>
        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
&lt;template&gt;
  &lt;my-component :item="item"&gt;
    &lt;template v-slot:default="slotProps"&gt;
      &lt;div&gt;
        &lt;h2&gt;{ { slotProps.item.title } }&lt;/h2&gt;
        &lt;p&gt;{ { slotProps.item.description } }&lt;/p&gt;
      &lt;/div&gt;
    &lt;/template&gt;
  &lt;/my-component&gt;
&lt;/template&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->
        <p>
          In this example, the slotProps object passed to the scoped slot contains
          the item prop passed to the MyComponent component, and the parent
          component can access the properties of the item object using the
          slotProps.item syntax.
        </p>
        <p>
          It's important to note that you can use the shorthand syntax for v-slot
          as well, where you just use the # sign instead of v-slot:default, and
          v-slot instead of template:
        </p>
        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
&lt;my-component :item="item"&gt;
    &lt;div #default="slotProps"&gt;
        &lt;h2&gt;{ { slotProps.item.title } }&lt;/h2&gt;
        &lt;p&gt;{ { slotProps.item.description } }&lt;/p&gt;
    &lt;/div&gt;
&lt;/my-component&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

        <FooterBar />
      </div>
    </div>

    <div class="articleNavigationContainer">
      <ArticleNavigation
        :new-headers="newHeaders"
      />
    </div>
  </section>
</template>

<script>
import TopBar from '../../../components/topBar/topBar.vue'
import ArticleNavigation from '../../../components/articleNavigation.vue'
import CodeBlock from '../../../components/codeBlock.vue'
import FooterBar from '../../../components/footerBar.vue'

export default {
  name: 'SlotsDocumentation',
  components: {
    ArticleNavigation,
    CodeBlock,
    TopBar,
    FooterBar
  },
  layout: 'documentation',
  data() {
    return {
      newHeaders: ['Slots', 'Default Slot', 'Named Slots',
        'Scoped Slots', 'Slot Props']
    }
  }
}
</script>

<style scoped>
@import '../documentationGlobalStyles.css';
</style>
