import { FileExtension, Texts } from 'anomaly-packer'

export const extension: FileExtension = 'ltx'

export default function (t: Texts): string {
  return t.dltx.override({
    sectionName: 'barman',
    _with: ['!weapons'],
  })
}
