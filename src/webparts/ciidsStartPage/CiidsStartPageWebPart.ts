import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import styles from './CiidsStartPageWebPart.module.scss';

export interface ICiidsStartPageWebPartProps {
}

export default class CiidsStartPageWebPart extends BaseClientSideWebPart<ICiidsStartPageWebPartProps> {
  public render(): void {
    this.domElement.innerHTML = `<div class="${ styles.ciidsStartPage }"></div>`;
  }

  protected onInit(): Promise<void> {
    return super.onInit();
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}
