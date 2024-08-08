import { addon_id } from '@/index'
import { Texts } from 'anomaly-packer'

type AddonId = typeof addon_id

export type SosiPhraseId = `${AddonId}_aslan_sosi_dialog_${
  | 'actor_greet'
  //
  | 'aslan_greet_in_return'
  //
  | 'actor_ask_money_or_sing'
  | 'actor_say_nevermind'
  //
  | 'npc_agree_give_money'
  //
  | 'actor_say_you_loser_goodbye'}`

const findBarretDialogId = 'aslan_find_barrett'
export const findBarretPortion = 'agreed_find_m82_for_aslan'
export type BarrettPhraseId = `${AddonId}_${typeof findBarretDialogId}_dialog_${
  | 'actor_shows_off_his_barrett'
  | 'aslan_surprise_actor_likes_barrett'
  | 'actor_confirm_like_barrett'
  //
  | 'aslan_ask_find_lost_barrett'
  | 'actor_agree_find_lost_barrett'
  //
  | 'aslan_wish_good_luck'}`

export default function (t: Texts): string {
  return [
    t.dialog({
      id: 'sosi_dialog',
      phrases: [
        {
          id: 0,
          text: 'super_stalker_addon_aslan_sosi_dialog_actor_greet' satisfies SosiPhraseId,
          next: 1,
        },
        {
          id: 1,
          text: 'super_stalker_addon_aslan_sosi_dialog_aslan_greet_in_return' satisfies SosiPhraseId,
          next: [2, 3],
        },
        {
          id: 2,
          text: 'super_stalker_addon_aslan_sosi_dialog_actor_ask_money_or_sing' satisfies SosiPhraseId,
          next: 4,
        },
        {
          id: 3,
          text: 'super_stalker_addon_aslan_sosi_dialog_actor_say_nevermind' satisfies SosiPhraseId,
        },
        {
          id: 4,
          text: 'super_stalker_addon_aslan_sosi_dialog_npc_agree_give_money' satisfies SosiPhraseId,
          action: ['modxml_super_stalker_addon_main.give_money', 'modxml_super_stalker_addon_main.give_gift'],
          give_info: 'aslan_discover_actor_likes_barrett',
          next: 5,
        },
        {
          id: 5,
          text: 'super_stalker_addon_aslan_sosi_dialog_actor_say_you_loser_goodbye' satisfies SosiPhraseId,
        },
      ],
    }),
    t.dialog({
      id: findBarretDialogId,
      dont_has_info: 'aslan_barrett_found',
      precondition: 'dialogs.check_barrett_m82_in_hands',
      phrases: [
        {
          id: 0,
          text: 'super_stalker_addon_aslan_find_barrett_dialog_actor_shows_off_his_barrett' satisfies BarrettPhraseId,
          next: 1,
        },
        {
          id: 1,
          text: 'super_stalker_addon_aslan_find_barrett_dialog_aslan_surprise_actor_likes_barrett' satisfies BarrettPhraseId,
          next: 2,
        },
        {
          id: 2,
          text: 'super_stalker_addon_aslan_find_barrett_dialog_actor_confirm_like_barrett' satisfies BarrettPhraseId,
          next: 3,
        },
        {
          id: 3,
          text: 'super_stalker_addon_aslan_find_barrett_dialog_aslan_ask_find_lost_barrett' satisfies BarrettPhraseId,
          next: 4,
        },
        {
          id: 4,
          text: 'super_stalker_addon_aslan_find_barrett_dialog_actor_agree_find_lost_barrett' satisfies BarrettPhraseId,
          action: 'dialogs.give_task_find_barrett',
          next: 5,
        },
        {
          id: 5,
          text: 'super_stalker_addon_aslan_find_barrett_dialog_aslan_wish_good_luck' satisfies BarrettPhraseId,
        },
      ],
    }),
  ].join('\n')
}
