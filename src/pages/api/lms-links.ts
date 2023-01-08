import { NextApiHandler } from 'next/types';
import {
  LMS_CONTENT_PATH,
  PROJECTS_PATH,
} from 'src/definitions/contentFilePaths';
import { getPaths } from 'src/lib/paths';

const lmsLinks: NextApiHandler = async (req, res) => {
  try {
    const { tree } = getPaths(LMS_CONTENT_PATH);

    res.json(tree);
  } catch (err) {
    console.log('error: ', err);
  }
};

export default lmsLinks;
