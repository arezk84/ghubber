
## Unreleased

### 0.13.0

Fixes:

- Crash, when navigate back to about when user open profile from about

### 0.12.0

Feature:

- AccountNotifications - rewrork on top of Realm
- Speedup application start
- AboutScreen - load contributors from JSON file
- AccountNotifications - improve sync
- Update vendors

Fixes:

- LoginScreen - disable autoCorrect for InputField

## 0.11.4

Feature:

- Rework OAuth proccess in WebView for iOS

> Hello,
Thank you for providing more information.
Regarding 4.0, your app continues to link out to Safari for GitHub, which provides a poor user experience.
To resolve this issue, it would be appropriate to revise your app to enable log in or registering for an account in the app.
We look forward to reviewing your resubmitted app.
Best regards,
App Store Review
    
## 0.11.3

Feature:

- Fix(iOS): Specify Dmitry Patsura team
- Fix: Force HTTPS for GitHub OAuth
- 

## 0.11.2

Feature:

- Use latest RN 0.53
- Use latest react-navigation

## 0.11.1

- [iOS] Fix iPhoneX issues related to status bar height

## 0.11.0

- Use latest React Native
- Drop rn-viewpager, use react-native-tab-view

## 0.10.0

Fix:

- [ModalPicker] Top padding should be qual to bottom
- [EventRow] Show only first line (title) in commit select

Features:

- [ProfileScene] Use GraphQL
- [EventRow] EventRow - support GollumEvent #65
- [CommitScreen] Allow to open committer's profile
- [Comment] Allow to open profile of the author
- [Android] Add splash screen
- [ReactionGroup] Show viewerHasReacted & improve style
- Localization added for Italian and Ukrainian languages

## 0.9.1

Fix:

- Fix epic crash on startup
- iOS: Welcome to new LaunchScreen
- iOS: Add marketing icon
- iOS: FastLane: check certs and provisions

## 0.9.0

Features:

- Support translations for en, es, pt_br, ru, sk
- [AccountNotifications] Initial
- [Feature] Account Issues/Notifications/PRs - improve error handling
- [FeedTopPanel] Display feed settings in modal

Fix:

- [RepositoryPullRequestScreen] Merged should be purple color
- [RepositoryIssue/RepositoryPullRequest] We don't neeeded to show ReactionGroup without likes

## 0.8.0

Features:

- [Feed] Allow to specify commit on PushEvent (when commits > 1)
- [SideMenu] Rework
- [Settings] Initial
- Support themes inside App (initial)


## 0.7.0

Features:

- [Commit] screen - initial implementation
- [RepositoryIssue] screen - initial implementation
- [RepostioryPullRequest] screen - initial implementation
- [Android] Upd buildToolsVersion to `26.0.1`
- [Android] Upd gradle to `2.3.3`

Fixes:

- [Feed] Fix login change
- [Android] Fixed crash with Sentry

## v0.6.1

Fixes:

- [Login] Fix `ImageBackground` for tablets
- [Android] Support Deep linking
- [Android] Fixes for OAuth

## v0.6.0

Features:

- Implement [OAuth] login type
- Implement [AccountIssues] screen, thank @lex111
- Showing Badges on PRs
- Feed - better support for different events
- Better performance with new `React Native`

Code:

- `ESLint` fixes, green CI :smiley_cat:
- Better `Flow` support

Full diff: https://github.com/ovr/ghubber/compare/0.5.1...0.6.0

## v0.5.1

Features:

- Better About screen

Fixes:

- iOS app performance

Full diff: https://github.com/ovr/ghubber/compare/0.5.0...0.5.1

## v0.5.0

## v0.4.1

- [AccountIssues] NFR: Implement infinity loading
- [AccountIssues] Hotfix: Change type was not working
- [Android] Fix epic broken build

## v0.4.0

- Implement SideMenu (Drawer)
- Implement Account Issues
- Profile screen - better desing, more info
- ProfileScreen show Repositories count badge
- Implement KeyBoardAvoidingView (it was not able to login on small device, for example iPhone 5 SE)
- RepositoryScreen - render README
- Error logging by Sentry
