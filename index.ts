import { pack } from 'anomaly-packer'
import { addon_id } from './src'

await pack({
  build: {
    outDirName: addon_id,
  },
  scripts: [{ sourceFileName: 'main', buildFileName: addon_id + '_main' }, { sourceFileName: 'dxml', buildFileName: 'modxml_' + addon_id }, { sourceFileName: 'task_find_barrett' }],
  refresh: [`C:/Users/Igor/AppData/Local/ModOrganizer/STALKER Anomaly/mods/${addon_id}/gamedata`],
})
