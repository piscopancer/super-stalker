import { FileExtension, Texts } from 'anomaly-packer'

export const extension: FileExtension = 'ltx'

export default function (t: Texts): string {
  return t.ltx({
    section: 'aslan_barrett_m82',
    with: ['wpn_m82' satisfies Item],
    entries: {
      inv_name: 'st_wpn_m82_aslan',
      inv_name_short: 'st_wpn_m82_aslan',
      story_id: 'aslan_barrett_m82',
      ammo_current: 15,
      ammo_limit: 15,
      ammo_mag_size: 15,
      startup_ammo: 15,
    },
  })
}
