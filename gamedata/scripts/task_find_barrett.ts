/** @noSelfInFile */

let state: FindBarrettTaskMData = {
  barret_id: null,
}

const aslan_sid: AslanFindBarretTask.AslanSid = 'cit_killers_merc_barman_mlr'

function on_game_start() {
  RegisterScriptCallback('load_state', function (this: void, m_data) {
    if (m_data.find_barrett_task) {
      state = m_data.find_barrett_task
    }
  })
  RegisterScriptCallback('save_state', function (this: void, m_data) {
    m_data.find_barrett_task = state
  })
}

task_status_functor.aslan_task_status_functor = function (_task, task_id) {
  if (!db.actor) return
  if (_task.stage === 0) {
    if (state.barret_id === null) {
      const barrett_spawn_pos = new vector().set(-44.5845, 2.2057, -18.6)
      const se_barrett = new alife().create('aslan_barrett_m82', barrett_spawn_pos, db.actor.level_vertex_id(), db.actor.game_vertex_id())
      state.barret_id = se_barrett.id
    } else {
      const barrett_in_inv = db.actor.object('aslan_barrett_m82')
      if (barrett_in_inv) {
        _task.stage = 1
      }
    }
    return
  }
  if (_task.stage === 1) {
    const barrett_in_inv = db.actor.object('aslan_barrett_m82')
    if (!barrett_in_inv) {
      _task.stage = 0
    }
  }
}

task_functor.aslan_task_target_functor = function (task_id, field, p, _task) {
  if (field === 'title') {
    switch (_task.stage) {
      case 0:
        return 'cit_killers_merc_barman_mlr_task_find_barrett_0_title' satisfies AslanFindBarretTask.Translations
      case 1:
        return 'cit_killers_merc_barman_mlr_task_find_barrett_1_title' satisfies AslanFindBarretTask.Translations
    }
  }
  if (field === 'descr') {
    switch (_task.stage) {
      case 0:
        return 'cit_killers_merc_barman_mlr_task_find_barrett_0_descr' satisfies AslanFindBarretTask.Translations
      case 1:
        return 'cit_killers_merc_barman_mlr_task_find_barrett_1_descr' satisfies AslanFindBarretTask.Translations
    }
  }
  if (field === 'target') {
    if (_task.stage === 0) {
      return state.barret_id
    }
    if (_task.stage === 1) {
      return _task.task_giver_id
    }
  }
}

const cmd_ = debug_cmd_list.command_get_list()
cmd_.aslan_task = function () {
  const aslan_id = get_story_object_id(aslan_sid)
  if (aslan_id !== null) {
    task_manager.get_task_manager().give_task('cit_killers_merc_barman_mlr_task_find_barrett' satisfies AslanFindBarretTask.Id, aslan_id)
  }
}

xr_effects.return_barrett = function () {
  const aslan = get_story_object(aslan_sid)
  if (aslan) {
    dialogs.relocate_item_section(aslan, 'aslan_barrett_m82', 'out')
  }
}
