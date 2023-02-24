import{e as t}from"./app.b3c39593.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const e={},r=t('<h1 id="\u9891\u9053\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u9891\u9053\u4E8B\u4EF6" aria-hidden="true">#</a> \u9891\u9053\u4E8B\u4EF6</h1><h3 id="\u6536\u5230\u9891\u9053\u6D88\u606F" tabindex="-1"><a class="header-anchor" href="#\u6536\u5230\u9891\u9053\u6D88\u606F" aria-hidden="true">#</a> \u6536\u5230\u9891\u9053\u6D88\u606F</h3><p><strong>\u4E0A\u62A5\u6570\u636E</strong></p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u53EF\u80FD\u7684\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>post_type</code></td><td>string</td><td><code>message</code></td><td>\u4E0A\u62A5\u7C7B\u578B</td></tr><tr><td><code>message_type</code></td><td>string</td><td><code>guild</code></td><td>\u6D88\u606F\u7C7B\u578B</td></tr><tr><td><code>sub_type</code></td><td>string</td><td><code>channel</code></td><td>\u6D88\u606F\u5B50\u7C7B\u578B</td></tr><tr><td><code>guild_id</code></td><td>string</td><td></td><td>\u9891\u9053ID</td></tr><tr><td><code>channel_id</code></td><td>string</td><td></td><td>\u5B50\u9891\u9053ID</td></tr><tr><td><code>user_id</code></td><td>string</td><td></td><td>\u6D88\u606F\u53D1\u9001\u8005ID</td></tr><tr><td><code>message_id</code></td><td>string</td><td></td><td>\u6D88\u606FID</td></tr><tr><td><code>sender</code></td><td>Sender</td><td></td><td>\u53D1\u9001\u8005</td></tr><tr><td><code>message</code></td><td>Message</td><td></td><td>\u6D88\u606F\u5185\u5BB9</td></tr></tbody></table><blockquote><p>\u6CE8: \u6B64\u5904\u7684 <code>Sender</code> \u5BF9\u8C61\u4E3A\u4FDD\u8BC1\u4E00\u81F4\u6027, <code>user_id</code> \u4E3A <code>uint64</code> \u7C7B\u578B, \u5E76\u6DFB\u52A0\u4E86 <code>string</code> \u7C7B\u578B\u7684 <code>tiny_id</code> \u5B57\u6BB5</p></blockquote><h3 id="\u9891\u9053\u6D88\u606F\u8868\u60C5\u8D34\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u9891\u9053\u6D88\u606F\u8868\u60C5\u8D34\u66F4\u65B0" aria-hidden="true">#</a> \u9891\u9053\u6D88\u606F\u8868\u60C5\u8D34\u66F4\u65B0</h3><p><strong>\u4E0A\u62A5\u6570\u636E</strong></p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u53EF\u80FD\u7684\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>post_type</code></td><td>string</td><td><code>notice</code></td><td>\u4E0A\u62A5\u7C7B\u578B</td></tr><tr><td><code>notice_type</code></td><td>string</td><td><code>message_reactions_updated</code></td><td>\u6D88\u606F\u7C7B\u578B</td></tr><tr><td><code>guild_id</code></td><td>string</td><td></td><td>\u9891\u9053ID</td></tr><tr><td><code>channel_id</code></td><td>string</td><td></td><td>\u5B50\u9891\u9053ID</td></tr><tr><td><code>user_id</code></td><td>string</td><td></td><td>\u64CD\u4F5C\u8005ID</td></tr><tr><td><code>message_id</code></td><td>string</td><td></td><td>\u6D88\u606FID</td></tr><tr><td><code>current_reactions</code></td><td>[]ReactionInfo</td><td></td><td>\u5F53\u524D\u6D88\u606F\u88AB\u8D34\u8868\u60C5\u5217\u8868</td></tr></tbody></table><p>ReactionInfo:</p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>emoji_id</code></td><td>string</td><td>\u8868\u60C5ID</td></tr><tr><td><code>emoji_index</code></td><td>int32</td><td>\u8868\u60C5\u5BF9\u5E94\u6570\u503CID</td></tr><tr><td><code>emoji_type</code></td><td>int32</td><td>\u8868\u60C5\u7C7B\u578B</td></tr><tr><td><code>emoji_name</code></td><td>string</td><td>\u8868\u60C5\u540D\u5B57</td></tr><tr><td><code>count</code></td><td>int32</td><td>\u5F53\u524D\u8868\u60C5\u88AB\u8D34\u6570\u91CF</td></tr><tr><td><code>clicked</code></td><td>bool</td><td>BOT\u662F\u5426\u70B9\u51FB</td></tr></tbody></table><h3 id="\u5B50\u9891\u9053\u4FE1\u606F\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u5B50\u9891\u9053\u4FE1\u606F\u66F4\u65B0" aria-hidden="true">#</a> \u5B50\u9891\u9053\u4FE1\u606F\u66F4\u65B0</h3><p><strong>\u4E0A\u62A5\u6570\u636E</strong></p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u53EF\u80FD\u7684\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>post_type</code></td><td>string</td><td><code>notice</code></td><td>\u4E0A\u62A5\u7C7B\u578B</td></tr><tr><td><code>notice_type</code></td><td>string</td><td><code>channel_updated</code></td><td>\u6D88\u606F\u7C7B\u578B</td></tr><tr><td><code>guild_id</code></td><td>string</td><td></td><td>\u9891\u9053ID</td></tr><tr><td><code>channel_id</code></td><td>string</td><td></td><td>\u5B50\u9891\u9053ID</td></tr><tr><td><code>user_id</code></td><td>string</td><td></td><td>\u64CD\u4F5C\u8005ID</td></tr><tr><td><code>operator_id</code></td><td>string</td><td></td><td>\u64CD\u4F5C\u8005ID</td></tr><tr><td><code>old_info</code></td><td>ChannelInfo</td><td></td><td>\u66F4\u65B0\u524D\u7684\u9891\u9053\u4FE1\u606F</td></tr><tr><td><code>new_info</code></td><td>ChannelInfo</td><td></td><td>\u66F4\u65B0\u540E\u7684\u9891\u9053\u4FE1\u606F</td></tr></tbody></table><h3 id="\u5B50\u9891\u9053\u521B\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u5B50\u9891\u9053\u521B\u5EFA" aria-hidden="true">#</a> \u5B50\u9891\u9053\u521B\u5EFA</h3><p><strong>\u4E0A\u62A5\u6570\u636E</strong></p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u53EF\u80FD\u7684\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>post_type</code></td><td>string</td><td><code>notice</code></td><td>\u4E0A\u62A5\u7C7B\u578B</td></tr><tr><td><code>notice_type</code></td><td>string</td><td><code>channel_created</code></td><td>\u6D88\u606F\u7C7B\u578B</td></tr><tr><td><code>guild_id</code></td><td>string</td><td></td><td>\u9891\u9053ID</td></tr><tr><td><code>channel_id</code></td><td>string</td><td></td><td>\u5B50\u9891\u9053ID</td></tr><tr><td><code>user_id</code></td><td>string</td><td></td><td>\u64CD\u4F5C\u8005ID</td></tr><tr><td><code>operator_id</code></td><td>string</td><td></td><td>\u64CD\u4F5C\u8005ID</td></tr><tr><td><code>channel_info</code></td><td>ChannelInfo</td><td></td><td>\u9891\u9053\u4FE1\u606F</td></tr></tbody></table><h3 id="\u5B50\u9891\u9053\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u5B50\u9891\u9053\u5220\u9664" aria-hidden="true">#</a> \u5B50\u9891\u9053\u5220\u9664</h3><p><strong>\u4E0A\u62A5\u6570\u636E</strong></p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u53EF\u80FD\u7684\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>post_type</code></td><td>string</td><td><code>notice</code></td><td>\u4E0A\u62A5\u7C7B\u578B</td></tr><tr><td><code>notice_type</code></td><td>string</td><td><code>channel_destroyed</code></td><td>\u6D88\u606F\u7C7B\u578B</td></tr><tr><td><code>guild_id</code></td><td>string</td><td></td><td>\u9891\u9053ID</td></tr><tr><td><code>channel_id</code></td><td>string</td><td></td><td>\u5B50\u9891\u9053ID</td></tr><tr><td><code>user_id</code></td><td>string</td><td></td><td>\u64CD\u4F5C\u8005ID</td></tr><tr><td><code>operator_id</code></td><td>string</td><td></td><td>\u64CD\u4F5C\u8005ID</td></tr><tr><td><code>channel_info</code></td><td>ChannelInfo</td><td></td><td>\u9891\u9053\u4FE1\u606F</td></tr></tbody></table>',19);function o(c,n){return r}var h=d(e,[["render",o]]);export{h as default};
