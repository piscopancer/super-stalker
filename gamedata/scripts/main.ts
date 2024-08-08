/** @noSelfInFile */

function on_game_start() {
  RegisterScriptCallback('on_key_press', (key) => {
    if (db.actor && key === DIK_keys.DIK_I) {
      actor_menu.set_msg(1, 'aslan_discover_actor_likes_barrett: ' + db.actor.has_info('aslan_discover_actor_likes_barrett'))
    }
  })
}

dialogs.check_barrett_m82_in_hands = function (speaker_1, speaker_2) {
  if (!db.actor) return false
  return db.actor.active_item()?.section() === ('wpn_m82' satisfies Item) ? true : false
}

dialogs.give_task_find_barrett = function (actor, aslan) {
  task_manager.get_task_manager().give_task('cit_killers_merc_barman_mlr_task_find_barrett' satisfies AslanFindBarretTask.Id, aslan.id())
}

// xr_effects.spawn_barrett = function (actor, npc) {
//   // const ac_dir_back = vector_rotate_y(actor.direction(), 180)
//   // const ac_pos = new vector().set(actor.position())
//   // const barrett_spawn_pos = ac_pos.add(ac_dir_back.mul(5))
//   const barrett_spawn_pos = new vector().set(-44.5845, 2.2057, -18.6)
//   const se_barrett = new alife().create('aslan_barrett_m82', barrett_spawn_pos, actor.level_vertex_id(), actor.game_vertex_id())
//   printf('=== spawned barrett ===')
//   printf('id: %s', se_barrett.id)
//   printf('section_name: %s', se_barrett.section_name())
//   printf('angle: %s', vec_to_str(se_barrett.angle))
//   printf('level name [%s], level id [%s]', level.name(), new alife().level_id())
//   CreateTimeEvent(0, 'find_barrett', 0, function () {
//     const barrett = level.object_by_id(se_barrett.id)?.cast_Weapon()
//     if (barrett) {
//       printf('# story id: %', barrett.story_id)
//       actor_menu.set_msg(1, tostring(se_barrett.id))
//       //
//       printf(barrett.Weight)
//     }
//     return true
//   })
// }

function give_money(speaker_1: CGameObject, speaker_2: CGameObject) {
  dialogs.relocate_money_to_actor(null, null, 222)
  dialogs.relocate_money_to_actor(null, null, 1000)
}

function give_gift(speaker_1: CGameObject, speaker_2: CGameObject) {
  new alife().create('wpn_m82', speaker_2.position(), speaker_2.level_vertex_id(), speaker_2.game_vertex_id(), speaker_2.id())
}
