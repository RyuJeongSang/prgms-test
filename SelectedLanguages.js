export default function SelectedLanguages({ $target, initialState }) {
  this.$element = document.createElement("div");
  this.$element.className = "SelectedLanguage";
  $target.appendChild(this.$element);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    this.$element.innerHTML = `
            <ul>
                ${this.state
                  .map(
                    (item) => `
                    <li>${item}</li>
                `
                  )
                  .join("")}
            </ul>
        `;
  };

  this.render();
}
