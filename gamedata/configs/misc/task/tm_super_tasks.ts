import { FileExtension, Ltx, Texts } from 'anomaly-packer'

export const extension: FileExtension = 'ltx'

export default function ({ ltx }: Texts): string {
  const f = ltx.f
  return ltx<Ltx.Task>({
    section: 'cit_killers_merc_barman_mlr_task_find_barrett' satisfies AslanFindBarretTask.Id,
    entries: {
      icon: 'ui_iconsTotal_weapons',
      storyline: false,
      prior: 0,
      stage_complete: 1,
      job_descr: 'job_descr_naiti_m82',

      title_functor: 'aslan_task_target_functor' satisfies keyof typeof task_functor,
      descr_functor: 'aslan_task_target_functor' satisfies keyof typeof task_functor,
      target_functor: 'aslan_task_target_functor' satisfies keyof typeof task_functor,
      status_functor: 'aslan_task_status_functor' satisfies keyof typeof task_status_functor,
      on_complete: `%+aslan_barrett_found =${f('return_barrett')} =${f('reward_random_money', 15000, 28000)}%`,
    },
  })
}
