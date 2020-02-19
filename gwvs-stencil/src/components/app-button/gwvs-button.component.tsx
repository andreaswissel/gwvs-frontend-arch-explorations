import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'app-button',
  styleUrl: 'gwvs-button.css',
  shadow: true
})
export class GwvsButton {
  @Prop() label: string = 'Button Label';

  render() {
    return (
      <span>{this.label}</span>
    );
  }
}
