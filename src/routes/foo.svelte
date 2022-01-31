<script context="module">
  export async function load() {
    return {
      props: {
        value: Math.random(),
      },
    };
  }
  export const hydrate = false;
</script>
<script>
  export let value;
</script>

<p>
  "{value}" from server!
</p>
