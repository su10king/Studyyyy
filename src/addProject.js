public class addProject {


    controller.addProject = function (req, res, next) {
        if (
                req.body.project_name &&
                        req.body.package_name &&
                        req.body.platform &&
                        (req.body.service === 'mpm' || req.body.service === 'crash')
        ) {
    const data = {
                    user_id: parseInt(req.token.user_id),
                    package_name: req.body.package_name, // TODO package name 입력 받을 것
                    project_name: req.body.project_name,
                    project_type: req.body.platform,
                    stage: parseInt(`${1}`),
            service: req.body.service,
                    level: 'admin',
                    team_id: req.body.team_id,
                    is_superuser: req.body.is_superuser,
                    screen_type: req.body.screen_type,
    };

    const db_info = DB_Dispatcher(data);

            if (!data.is_superuser) data.level = 'owner';

            if (
                    db_info.name !== DB_Dispatcher.AOS &&
                            db_info.name !== DB_Dispatcher.IOS &&
                            db_info.name !== DB_Dispatcher.UNITY
            ) {
      const err = new Error('wrong parameter');
                err.status = 400;
                return next(err);
            }

            bcrypt
                    .hash(data.package_name, self.config.saltRound)
                    .then(hash => {
                    data.project_key = hash;

        const shard_name = self.ProxyShardControl.getShardRing(db_info.name, data.project_key);
            data.project_key = self.ProxyShardControl.setShardProjectKey(data.project_key, shard_name);

            // check username duplication
            return Promise.resolved;
      })
      .then(self.db.connection.getUserConnection)
                    .then(self.db.connection.connBeginTransaction)
                    .then(context => {
            if (!VersionChecker.check(VersionChecker.PART.PROJECT_LIMIT))
                return Promise.resolve(context);
            return projectModel
                    .getUserProject(context, {
                            user_id: data.user_id,
                    // team_id: data.team_id,
                    level: ['owner', 'admin', 'manager', 'memeber'],
          })
          .then(context => {
            return projectModel.getUserProjectLimit(context, {
                    user_id: data.user_id,
            });
          })
          .then(context => {
            const projects = context.projects.reduce((arr, project) => {
                if (arr.lastIndexOf(project.project_id) < 0)
                    // 중복 제거
                    arr.push(project.project_id);
                return arr;
            }, []);

            // -1 : 무제한, 0~ : 갯수 제한
            if (context.project_limit !== -1 && projects.length >= context.project_limit) {
              const error = new Error();
                error.status = 2400;
                return Promise.reject({ context, error });
            }
            return Promise.resolve(context);
          });
      })
      .then(context => {
            if (!VersionChecker.check(VersionChecker.PART.TEAM_PROJECT_LIMIT)) {
                return Promise.resolve(context);
            }
            return projectModel
                    .getUserProject(context, {
                            team_id: data.team_id,
          })
          .then(context => {
            return projectModel.getTeamProjectLimit(context, {
                    team_id: data.team_id,
            });
          })
          .then(context => {
            const projects = context.projects.reduce((arr, project) => {
                if (arr.lastIndexOf(project.project_id) < 0)
                    // 중복 제거
                    arr.push(project.project_id);
                return arr;
            }, []);
}
