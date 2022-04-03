“动作”采用添加“_action”后缀
- user（<u>user_id</u>,user_name,user_avatar_path,sex,grade,is_vip,play_count,thumb_up_number,fan_number, follower_number,announce_content,signature_content）
- star_dir(<u>star_dir_id</u>,star_dir_title,star_dir_category;fk_user_id)
- video（<u>video_id</u>,video_title,introduce,video_img_path,video_path,is_forward_allowed,video_datetime, video_play_count,video_barrage_count,video_thumb_up_number,video_coin_number,video_star_number, video_forward_number
  ;fk_user_id;fk_category_id;fk_channel_id）
- video_selection(<u>selection_id</u>,selection_title,selection_path,selection_duration;fk_video_id)
- category（<u>category_id</u>,category_name）
- channel(<u>channel_id</u>,channel_name)
- watch_action（<u>user_id,video_id</u>,watch_datetime）
- star_action（<u>user_id,video_id,fk_star_dir_id</u>,star_datetime）/
- thumb_up_action（<u>user_id,video_id</u>,thumb_up_datetime）
- coin_action（<u>user_id,video_id</u>,coin_datetime）
- forward_action（<u>user_id,video_id</u>,forward_datetime）
- barrage_action（<u>user_id,video_id</u>,content,barrage_datetime）
- comment_action（<u>user_id,video_id</u>,content,comment_datetime,thumb_up_number）
- focus_action（<u>follower_user_id,followed_user_id</u>,focus_datetime）