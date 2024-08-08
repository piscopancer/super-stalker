/** @noSelfInFile */

declare namespace AslanFindBarretTask {
  type Id = `${AslanSid}_task_find_barrett`
  type AslanSid = 'cit_killers_merc_barman_mlr'
  type Translations = `${Id}_${`${0 | 1}_${'title' | 'descr'}` | 'finish'}`
}

declare namespace Addon {
  type Id = 'super_stalker_addon'
}

declare namespace xr_effects {
  export function spawn_barrett(actor: CGameObject, npc: CGameObject): void
  export function return_barrett(actor: CGameObject, npc: CGameObject): void
}

declare type Task = { stage: number; task_giver_id: number }
declare type TaskStatusFunctorParams = [task: Task, task_id: number]
declare type TaskStatusFunctorReturn = 'fail' | 'complete' | void
declare type TaskFunctorParams = [task_id: number, field: 'title' | 'descr' | 'target', p: TODO, _task: Task]
declare type TaskFunctorReturn = number | string | void | null

declare namespace task_status_functor {
  export function aslan_task_status_functor(...p: TaskStatusFunctorParams): TaskStatusFunctorReturn
}

declare namespace task_functor {
  export function aslan_task_target_functor(...p: TaskFunctorParams): TaskFunctorReturn
}

declare namespace dialogs {
  export function check_barrett_m82_in_hands(speaker_1: CGameObject, speaker_2: CGameObject): boolean
  export function give_task_find_barrett(speaker_1: CGameObject, speaker_2: CGameObject): void
}

declare namespace debug_cmd_list {
  /** @noSelf */
  interface Cmd {
    aslan_task(): void
  }
}

type FindBarrettTaskMData = {
  barret_id: number | null
}

interface MData {
  find_barrett_task?: FindBarrettTaskMData
}
