<todo>
    <!-- layout -->
    <h1>{ props.title }</h1>

    <ul>
        <li each={ item in state.items }>{ item }</li>
    </ul>

    <form onsubmit={ add }>
        <input name="todo">
        <button>Add #{ state.items.length + 1 }</button>
    </form>

    <!-- style -->
    <style>
        :host {
            padding: 16px;
        }
    </style>

    <!-- logic -->
    <script>
        export default {
            state: {
                items: []
            },
            add(e) {
                e.preventDefault();
                const input = e.target.todo;

                this.state.items.push(input.value);
                this.update();

                input.value = '';
            }
        }
    </script>
</todo>