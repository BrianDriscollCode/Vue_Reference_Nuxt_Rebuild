<template>
  <section class="contentWrapper">
    <div class="mainContent">
      <TopBar />
      <div class="mainContentContainer">
        <h1> Emitted Events </h1>

        <p>
          In Vue, emitted events are a way for a child component to communicate
          with its parent component. The child component emits an event, which
          the parent component can listen for and respond to. This allows for a
          <mark>unidirectional flow</mark> of data between the parent and child components.
        </p>

        <h2 id="emitMethod">
          Emit Method (Child)
        </h2>

        <p>
          To emit an event in a child component, you can use the <mark>$emit</mark> method.
          The first argument of the <mark>$emit method</mark> is the name of the event, and
          any additional arguments (optional) will be passed as payloads to the event. For
          example:
        </p>
        <!-- eslint-disable -->
        <pre>
          <CodeBlock>
&lt;template&gt;
  &lt;button @click="$emit('my-event', 'some data')"&gt;Emit event&lt;/button&gt;
&lt;/template&gt;
          </CodeBlock>
        </pre>
        <!-- eslint-enable -->

        <p>
          This will emit an event called "my-event" when the button is clicked, passing
          the string "some data" as a payload.
        </p>

        <h2> Listening for Events (Parent)</h2>

        <p>
          To listen for an emitted event in a parent component, you can use the <mark>v-on</mark>
          directive. The first argument of the <mark>v-on</mark> directive is the name of the event,
          and the second argument is a callback function that will be called when the
          event is emitted. For example:
        </p>

        <pre>
          <CodeBlock>
&lt;template&gt;
  &lt;child-component v-on:my-event="handleEvent"&gt;&lt;/child-component&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  methods: {
    handleEvent(payload) {
      console.log(payload)
    }
  }
}
&lt;/script&gt;
          </CodeBlock>
        </pre>

        <p>
          In this example, the parent component is listening for the "my-event"
          event emitted by the child component and when the event is emitted, the
          <mark>handleEvent</mark> function is called, and the payload passed by the child
          component is logged to the console.
        </p>

        <h2 id="passingArguments">
          Passing Arguments
        </h2>
        <p>
          You can also pass arguments to the emitted event by using the $event
          variable. For example:
        </p>

        <pre>
          <CodeBlock>
&lt;template&gt;
  &lt;button @click="$emit('my-event', $event)"&gt;Emit event&lt;/button&gt;
&lt;/template&gt;
          </CodeBlock>
        </pre>

        <h2 id="eventModifiers">
          Event Modifiers
        </h2>
        <p>
          You can also use event modifiers with emitted events, just like you can with
          native DOM events. For example, you can use the <mark>.prevent</mark> and <mark>.stop</mark> modifiers
          to prevent the default behavior of the event or stop it from propagating to
          parent components.
        </p>

        <pre>
          <CodeBlock>
&lt;template&gt;
  &lt;button @click.prevent="$emit('my-event')">Emit event&lt;/button&gt;
&lt;/template&gt;
          </CodeBlock>
        </pre>
        <p>
          Emitted events are a powerful way to communicate between components in a Vue
          application, and they allow for a more modular and reusable structure. It's
          important to keep in mind that emitted events should be used to communicate
          between components, while props should be used to pass data down from a
          parent component to its child components.
        </p>

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
  name: 'EmittedEventsDocumentation',
  components: {
    ArticleNavigation,
    CodeBlock,
    TopBar,
    FooterBar
  },
  layout: 'documentation',
  data() {
    return {
      newHeaders: ['EmittedEvents', 'EmitMethod', 'ListeningforEvents',
        'PassingArguments', 'EventModifiers']
    }
  }
}
</script>

<style scoped>
@import '../documentationGlobalStyles.css';
</style>
