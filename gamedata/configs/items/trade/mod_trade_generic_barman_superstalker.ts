import { FileExtension, Texts } from 'anomaly-packer'

export const extension: FileExtension = 'ltx'

export default function (t: Texts): string {
  const text: string[] = []

  text.push(
    t.ltx({
      section: 'barman_extension',
      entries: {
        wpn_m82: [1, 1],
        af_baloon: [10, 1],
      },
    })
  )

  text.push(
    t.dltx.override({
      sectionName: 'supplies_1',
      _with: ['barman_extension'],
    })
  )

  return text.join('\n')
}
