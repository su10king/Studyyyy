public class router {


    router.post('/project', check.checkUser, api.project.addProject);
router.delete(
        '/project/:project_id',
    check.checkUser,
    check.checkProject,
    check.checkProjectModifyAuth,
    api.project.removeProject,
            );
router.get(
        '/project/:project_id',
    check.checkUser,
    check.checkProject,
    api.project.getProjectInfo,
            );
router.get('/project/:project_id/hynix', check.checkProjectForHynix, api.project.getProjectInfo);
router.put(
        '/project/:project_id',
    check.checkUser,
    check.checkProject,
    check.checkProjectModifyAuth,
    api.project.editProject,
            );
router.post(
        '/set_combine_proejct/:project_id',
    check.checkUser,
    check.checkProject,
    check.checkProjectModifyAuth,
    api.project.editCombineProject,
            );
router.put(
        '/project/:project_id/screen_alias',
    check.checkUser,
    check.checkProject,
    api.project.changeScreenAlias,
            );
}
