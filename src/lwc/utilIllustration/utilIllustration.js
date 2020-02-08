import { LightningElement, api } from 'lwc';

export default class UtilIllustration extends LightningElement {
    @api illustrationClass;
    @api size;
    @api title;
    @api message;

    // Valid values: lake-mountain, going-camping
    // Pulled from https://lightningdesignsystem.com/components/illustration
    @api variant;

    get illustrationSize() {
        return this.size ? 'slds-illustration_' + this.size : 'slds-illustration_small';
    }

    get fullClass() {
        return `slds-illustration ${this.illustrationSize} ${this.illustrationClass ? this.illustrationClass : ''}`;
    }

    get isBase() {
        return !this.variant || this.variant === '' ? true : false;
    }

    get isLakeMountain() {
        return this.variant === 'lake-mountain' ? true : false;
    }

    get isGoingCamping() {
        return this.variant === 'going-camping' ? true : false;
    }
}