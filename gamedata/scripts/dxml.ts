/** @noSelfInFile */

function on_xml_read() {
  RegisterScriptCallback('on_xml_read', (xml_file_name, xml_obj) => {
    printf('# xml_file: %s', xml_file_name)
    if (string.match(xml_file_name, 'gameplay')[0]) {
      db.actor?.give_game_news('', xml_file_name, db.actor.character_icon(), 0, 5000)
    }
    const dialogs_to_change = 'gameplay\\dialogs_deadcity.xml'
    if (xml_file_name === dialogs_to_change) {
      xml_obj.insertFromXMLFile('super_stalker\\aslan_dialogs.xml')
    }
    if (xml_file_name === 'gameplay\\character_desc_deadcity.xml') {
      const aslan_id = 'cit_killers_merc_barman_mlr'
      const el = xml_obj.query(`specific_character[id="${aslan_id}"]`)[0]
      if (el) {
        xml_obj.insertFromXMLString(`<actor_dialog>aslan_find_barrett</actor_dialog>`, el, el.kids.length)
      }
    }
  })
}
