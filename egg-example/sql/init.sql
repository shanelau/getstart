CREATE TABLE `track_event` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `category` varchar(100) DEFAULT NULL COMMENT '事件类型',
  `resource` int(11) DEFAULT NULL '资源类型',
  `action` varchar(100) DEFAULT NULL COMMENT '事件动作，增删改查',
  `label` varchar(500) DEFAULT NULL COMMENT '具体事件ID',
  `value` int(11) DEFAULT 1 COMMENT '事件值，默认1',
  `user_id` int(11) DEFAULT NULL COMMENT '用户编号',
  `comment` varchar(500) DEFAULT NULL COMMENT '备注',
  `create_time` datetime DEFAULT NULL,
  `ip` varchar(100) DEFAULT NULL COMMENT '用户 ip',
  `ua` varchar(500) DEFAULT NULL COMMENT 'user agent',

  PRIMARY KEY (`id`),
  -- KEY `fk_user_id` (`user_id`),
  -- CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `bigviz_user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;