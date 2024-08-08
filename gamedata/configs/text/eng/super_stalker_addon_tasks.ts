import { Texts } from 'anomaly-packer'

export default function (t: Texts): string {
  return t.translations<AslanFindBarretTask.Translations>({
    cit_killers_merc_barman_mlr_task_find_barrett_0_title: "Find Aslan's Barrett M82",
    cit_killers_merc_barman_mlr_task_find_barrett_0_descr: "Aslan told me he lost his rifle near the Lenin's monument",
    cit_killers_merc_barman_mlr_task_find_barrett_1_title: "Find Aslan's Barrett M82",
    cit_killers_merc_barman_mlr_task_find_barrett_1_descr: 'Return Barrett M82 to Aslan',
    cit_killers_merc_barman_mlr_task_find_barrett_finish: 'COMPLETE LOL',
  })
}
