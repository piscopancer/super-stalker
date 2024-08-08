import { Texts } from 'anomaly-packer'
import { BarrettPhraseId, SosiPhraseId } from '../../super_stalker/aslan_dialogs'

export default function (t: Texts): string {
  return [
    t.translations<SosiPhraseId | BarrettPhraseId>({
      // sosi dialog
      super_stalker_addon_aslan_sosi_dialog_actor_greet: 'Hello, Aslan',
      super_stalker_addon_aslan_sosi_dialog_aslan_greet_in_return: 'Hello, a totally random person I am seeing the first time in my life',
      super_stalker_addon_aslan_sosi_dialog_actor_ask_money_or_sing: 'Give me money or sign the anthem of Ukraine now!',
      super_stalker_addon_aslan_sosi_dialog_actor_say_nevermind: 'Nevermind...',
      super_stalker_addon_aslan_sosi_dialog_npc_agree_give_money: 'Bruh, wtf... Fine, take my money, miserable fucker',
      super_stalker_addon_aslan_sosi_dialog_actor_say_you_loser_goodbye: "You're such a loser... Thanks for the money, farewell",
      // find barret dialog
      super_stalker_addon_aslan_find_barrett_dialog_actor_shows_off_his_barrett: 'Hey man, how do you like my Barrett M82?',
      super_stalker_addon_aslan_find_barrett_dialog_aslan_surprise_actor_likes_barrett: 'Not gonna lie, you caught me off guard with this one, I did not know you were a fan of heavy sticks',
      super_stalker_addon_aslan_find_barrett_dialog_actor_confirm_like_barrett: "Yes, that's true",
      super_stalker_addon_aslan_find_barrett_dialog_aslan_ask_find_lost_barrett: 'Listen, I had a Barrett too but I lost it. Can you find it for me? I lost my girl somewhere in the area',
      super_stalker_addon_aslan_find_barrett_dialog_actor_agree_find_lost_barrett: "Sure, I'll find it",
      super_stalker_addon_aslan_find_barrett_dialog_aslan_wish_good_luck: 'Thanks, return with good news. Good luck',
    }),
  ].join('\n')
}
